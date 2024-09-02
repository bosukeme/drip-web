'use client'

import { useState, FormEvent } from "react"
import Image from "next/image"

function DeleteForm() {
    const [email, setEmail] = useState<string>("")
    const [feedback, setFeeback] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL as string

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true);

        fetch(BASE_URL + "/USER-submit-feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_email:email,
                feedback:feedback
            })
        })
        .then(response => {

            if (!response.ok) {
                // Check if the response status is not OK (e.g., 404, 500)
                return response.json().then(errorData => {
                    throw new Error(errorData.message || "An error occurred");
                });
            }
            return response.json();
        
        })
        .then(data => {
            alert("Feedback sent successfully") 
        })
        .catch(error => {
            alert("Unable to send feedback: " + error.message)
        })
        .finally(() => {
            setIsLoading(false); 
            setEmail("");
        });

        setEmail("")
        setFeeback("")

    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h3 
                className="font-bold text-2xl text-center mb-5"
            >
                Feedback 
            </h3>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center border-2 rounded-lg py-10 px-8 w-full max-w-md"
            >
                <Image 
                    src="/driptok.png"
                    alt="driptok" 
                    width={90}
                    height={90}
                    className="mb-20"
                    priority
                />

                <input
                    className="bg-slate-100 border h-10 w-full px-4 rounded-lg mb-5"
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                    />

                <textarea
                    className="bg-slate-100 border h-32 w-full px-4 rounded-lg mb-5"
                    rows={4}
                    
                    placeholder="feedback"
                    value={feedback}
                    onChange={(e) => setFeeback(e.target.value)}
                    required
                    />
                
                <button
                    type="submit"
                    className={`bg-gradient-custom text-white font-bold py-2 px-4 rounded-md border-none cursor-pointer ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    {isLoading ? "Loading..." : "SUBMIT"}
                </button>

            </form>
        </div>
  )
}

export default DeleteForm