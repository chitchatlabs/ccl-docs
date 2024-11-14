---
sidebar_position: 3
---
# Sending Messages

Once you’ve configured your **WhatsApp Business Account (WABA)**, you can start creating and sending message templates to engage with your users. This guide covers creating message templates using **WhatsApp Manager** and using **ChitChatLabs** to send messages.

---

## Create a Message Template in WhatsApp Manager

To create a message template:
1. Visit [WhatsApp Manager](https://business.facebook.com/latest/whatsapp_manager/message_templates).
2. Choose the type of template you need: **Marketing**, **Utility**, or **Authentication**.
3. Customize your template’s components:
   - **Header**: Can include text, an image, a document, or a video. Note that any media in the header is parameterized.
   - **Body**: Use rich formatting like bold, italics, emojis, and parameters (e.g., `{{1}}`, `{{2}}`) to personalize messages and make them more engaging.
   - **Footer**: This is a gray text section at the bottom of the message.
   - **Buttons**: Add buttons for interactivity. You can also set dynamic suffixes for these buttons.

Once your template is ready, submit it for approval. Approved templates can then be used within ChitChatLabs to message your users.

---

## Sending Messages to Your Users

With ChitChatLabs, you can send messages using your approved templates. To get started:

### Step 1: Upload Your Contact List
1. Go to the [Messages page](https://chitchatlabs.com/#/messages) on ChitChatLabs.
2. Use the **Contacts** tab to manage your contacts.
   - You can add contacts individually or upload a CSV file. Ensure that each contact has "name" and "mobile" fields (required), and include any other custom fields you need.
   - These additional fields can serve as parameters in your message templates or help filter contact records for specific targeting.

### Step 2: Search and Select Contacts
- After creating or uploading contacts, you can search by one or more filter values.
- When you click **Send Message**:
  - If a search has been performed, only the matching contact records will be used.
  - If no search is performed, the message will be sent to all contacts in your list.

### Step 3: Configure the Send Message Modal
In the **Send Message** modal, complete the following steps:
- Fill out the required fields based on the on-screen instructions.
- Add parameters as fixed values or use dynamic values from the contacts table by specifying the column name within double curly braces (e.g., `{{name}}`).
- Optionally, add a **tag** to label this particular send, which is useful for tracking messages sent with the same template on different occasions.

#### Example Message Body
Here’s a sample message payload that you might use:

```json
{
  "language": "en",
  "file": {
    "type": "image",
    "link": "https://link"
  },
  "params": [
    "{{name}}",
    "{{color}}"
  ],
  "tag": "10-Nov-Push",
  "buttons": [
    "{{video_link}}"
  ]
}
```

### Step 4: Send the Message

Click **Send** to initiate the message delivery. You’ll receive confirmation that the message is being sent.

---

## Monitoring Sent Messages

After sending, you can track message delivery and status in the **Messages** tab:
1. Go to the **Messages** tab.
2. Use the search options to filter sent messages by template, tag, status, and other parameters.

This tab provides detailed statuses for each message, helping you monitor delivery success. If an error occurs, the **Messages** tab will display the specific error type and a link to the relevant Facebook documentation, allowing you to understand and resolve any issues effectively.
