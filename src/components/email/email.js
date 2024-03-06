import React from 'react';

const EmailButton = (props) => {
    const sendEmail = () => {
        // Define email details
        const to = 'pavankumar5238@gmail.com';
        const subject = 'Your predefined subject';
        const body = `I've shared a marker with you, click below to view in the BaseMap app. https://app.basemap.com/marker?latitude=${props.lat}&longitude=${props.lng}&t=63&n=Vineyard%20Condo&c= Don't have the app? Download here: https://app.basemap.com.`;

        // Create a mailto URL
        const mailtoURL = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the default email client with the predefined details
        window.location.href = mailtoURL;
    };

    return (
        <button onClick={sendEmail}>Send Email</button>
    );
};

export default EmailButton;
