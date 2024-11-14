---
sidebar_position: 4
---
# Sending Messages via API

In addition to using the ChitChatLabs UI, you can send messages directly through our API. This guide covers two API endpoints: one for sending a **single message** and another for sending **bulk messages** from your contact list.

---

## Prerequisites

To use the API, ensure you have:
- **API Key**: You’ll need to include your API key in the header for authentication. Find your API key in the **Account Information** section under [Settings](https://chitchatlabs.com/#/settings).

### Important Header
- **x-tenant-api-key**: Add this header to authenticate your API requests.

---

## Sending a Single Message

The single message API allows you to send a message to an individual recipient without the need to add them to your contacts.

### Endpoint

```plaintext
POST https://app.chitchatlabs.com/chat-service/apis/message/single
```

### Example Request

```bash
curl --location 'https://app.chitchatlabs.com/chat-service/apis/message/single' \
--header 'x-tenant-api-key: <YOUR_API_KEY>' \
--header 'Content-Type: application/json' \
--data '{
    "to": {
        "mobile": "919739978284",
        "name": "Partha"
    },
    "fb_template": "habit_run_confirmation_message",
    "language": "en",
    "file": {
      "type": "image",
      "link": "https://chitchatlabs.github.io/image-service/CCLABS_TENANT/test.png"
    },
    "params": [
        "Partha",
        "Habit Run November Edition",
        "24th Nov"
    ],
    "tag": "test_tag"
}'
```

### Request Body Parameters

- **to**: Specifies the recipient’s details.
  - **mobile**: Recipient’s phone number (e.g., `919739978284`).
  - **name**: Recipient’s name (e.g., `Partha`).
- **fb_template**: The message template name in WhatsApp Manager (e.g., `habit_run_confirmation_message`).
- **language**: The language code for the message (e.g., `en`).
- **file** (optional): Media to include in the message.
  - **type**: Type of file (`image`, `video`, `document`).
  - **link**: URL of the file.
- **params**: List of parameter values for template personalization (e.g., `["Partha", "Habit Run November Edition", "24th Nov"]`).
- **tag** (optional): Custom tag for tracking purposes (e.g., `test_tag`).

---

## Sending Bulk Messages from Contacts

The bulk message API sends messages to multiple contacts filtered by specified criteria. This API works similarly to the bulk messaging function in the ChitChatLabs UI.

### Endpoint

```plaintext
POST https://app.chitchatlabs.com/chat-service/apis/message/blast
```

### Example Request

```bash
curl --location 'https://app.chitchatlabs.com/chat-service/apis/message/blast' \
--header 'x-tenant-api-key: <YOUR_API_KEY>' \
--header 'Content-Type: application/json' \
--data '{
    "searchSpec": {"name": "Partha"},
    "fb_template": "habit_run_confirmation_message",
    "language": "en",
    "file": {
      "type": "image",
      "link": "https://chitchatlabs.github.io/image-service/CCLABS_TENANT/test.png"
    },
    "params": [
        "{{name}}",
        "Habit Run November Edition",
        "24th Nov"
    ],
    "tag": "test_tag_bulk"
}'
```

### Request Body Parameters

- **searchSpec**: Filters for selecting contacts based on contact fields (e.g., `{ "name": "Partha" }`).
- **fb_template**: The message template name in WhatsApp Manager (e.g., `habit_run_confirmation_message`).
- **language**: The language code for the message (e.g., `en`).
- **file** (optional): Media to include in the message.
  - **type**: Type of file (`image`, `video`, `document`).
  - **link**: URL of the file.
- **params**: List of parameter values, with dynamic placeholders (e.g., `["{{name}}", "Habit Run November Edition", "24th Nov"]`).
- **tag** (optional): Custom tag for tracking (e.g., `test_tag_bulk`).

---

## Monitoring Message Status

After sending messages through the API, you can monitor the delivery status and manage any errors using the **Messages** tab in the ChitChatLabs UI. Here, you can filter sent messages by template, tag, status, and other parameters. Any errors will include specific error types along with links to relevant Facebook documentation for troubleshooting.