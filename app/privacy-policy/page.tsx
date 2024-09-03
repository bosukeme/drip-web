import Image from "next/image";

export default function Privacy() {
    return (
        <div className="mx-auto p-8 mb-10 max-w-3xl">
            <h1 className="text-4xl font-extrabold text-center"> DripTok Privacy Policy </h1>

            <h6 className="text-center mb-4">Effective Date: August 20, 2024</h6>
            <div className="flex flex-col items-center justify-center">
                <Image 
                    src="/driptok.png"
                    alt="driptok" 
                    width={90}
                    height={90}
                    className="mb-10"
                    priority
                />
            </div>

            <h2> 1. Introduction </h2>

            <p > 
                Welcome to DripTok, a social app designed to help you decide what to wear for outings by providing personalized fashion inspirations, exploring others’ “Drips,” and connecting with other fashion enthusiasts. Your privacy is important to us. 
            </p> 
            <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app. Please read this policy carefully.
            </p>

            <p>
                By using our app, you consent to the practices described herein. 
            </p>

            <h2>
                2. Information We Collect
            </h2>

            <h3>
                2.1 Personal Information
            </h3>
            <p>
                We collect personal information that you voluntarily provide when you:
            </p>

            <ul>
                <li>
                    Create an account or log in using third-party authentication (Facebook, TikTok, Twitter, Google)
                </li>
                <li>
                    Authenticate your phone number
                </li>
                <li>
                    Create and update your user profile
                </li>
                <li>
                    Post content, such as Drips, comments, and voiceovers
                </li>
            </ul>
            
            <p>
                Personal information may include:
            </p>
                <ul>
                    <li>
                        Your name, email address, and profile picture
                    </li>
                    <li>
                        Phone number
                    </li>
                    <li>
                        Authentication credentials from third-party services (Facebook, twitter, or google)
                    </li>
                    <li>
                        Content you create (photos, videos, voice recordings, text)
                    </li>
                </ul>

            <h3>
                2.2 Usage Data
            </h3>
                <p>
                    We automatically collect certain data when you use the app, including:
                </p>
                <ul>
                    <li>
                        Device information (such as your device type, operating system, and unique device identifier)
                    </li>
                    <li>
                        Usage data (including the actions you take within the app, the Drips you interact with, and search queries)
                    </li>
                    <li>
                        Location data (if you enable location services)
                    </li>

                </ul>

            <h3>
                2.3 Third-Party Data
            </h3>
            <p>
                We may collect data from third-party sources such as Asus, which provides us with fashion items data to generate outfit suggestions.
            </p>

            <h2>
                3. How We Use Your Information
            </h2>

            <h3>
                3.1 To Provide and Improve Our Services
            </h3>
            <p>
                We use your information to:
            </p>
                <ul>
                    <li>
                        Personalize your experience and generate outfit suggestions
                    </li>
                    <li>
                	    Allow you to connect with other users and share content
                    </li>
                    <li>
                    	Authenticate your account and secure the app                    
                    </li>
                    <li>
                    	Improve the app’s functionality based on user feedback and usage patterns                    
                    </li>

                </ul>


            <h3>
                3.2 Communication
            </h3>
            <p>
                We may use your information to:
            </p>
                <ul>
                    <li>
                    	Send you notifications about your activity on the app, such as new comments, likes, and followers
                    </li>
                    <li>
                    	Send you reminders to post your Drip when you have upcoming outings
                    </li>
                    <li>
                    	Provide customer support
                    </li>
                </ul>

            <h3>
                3.3 Marketing
            </h3>
            <p>
                With your consent, we may use your information to send you promotional content and recommendations based on your preferences.
            </p>

            <h2>
                4. Sharing Your Information
            </h2>

            <h3>
                4.1 With Other Users
            </h3>

            <ul>
                <li>
                	Your profile information, posts, and interactions (e.g., comments, likes) are visible to other users.
                </li>
                <li>
                	Voiceovers and Drips you create will be shared with the community.
                </li>

            </ul>

            <h3 className="space-y-2">
                4.2 With Third-Party Services
            </h3>
            
            <ul>
                <li>
                	We may share data with third-party services that provide additional functionality within the app, such as authentication or data analysis.
                </li>

                <li>
                	We may share non-personal data with fashion retailers like Asus to enhance your experience with relevant product recommendations.
                </li>
            </ul>

            <h3>
                4.3 Legal Obligations
            </h3>
            <p>
                We may disclose your information if required by law or if we believe that such action is necessary to comply with legal processes, protect the rights, property, or safety of DripTok, our users, or others.
            </p>

            <h2>
                5. Your Choices
            </h2>

            <h3>
                5.1 Account Information
            </h3>

            <p>
                You can update or delete your account information at any time by accessing your profile settings.
            </p>

            <h3>
                5.2 Notifications
            </h3>
            <p>
                You can opt-out of receiving push notifications by adjusting your device settings.
            </p>

            <h3>
                5.3 Data Retention
            </h3>
            <p>
                We retain your personal data only as long as necessary to fulfill the purposes outlined in this Privacy Policy. You can request the deletion of your account and associated data by contacting us.
            </p>
            
            <h2>
                6. Security
            </h2>

            <p>
                We use industry-standard security measures to protect your personal data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>
                7. Children’s Privacy
            </h2>

            <p>
                DripTok is not intended for use by children under the age of 13. We do not knowingly collect personal data from children under 13. If we learn that we have collected such data, we will take steps to delete it as soon as possible.
            </p>

            <h2>
                8. Changes to This Policy
            </h2>
            <p>
                We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>

            <h2>
                9. Contact Us
            </h2>

            <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at support@driptok.com.
            </p>

            <p>
                By using DripTok, you agree to the terms outlined in this Privacy Policy.
            </p>
        </div>
    );
}