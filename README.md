# 🚀 Node.js App on Google Cloud (GCE)

This project shows how to deploy a Node.js web app on a Google Cloud Compute Engine virtual machine (GCE). You’ll expose it to the internet over **HTTP** with firewall.


## 🧰 What You Need

- A Google Cloud account
- `gcloud` CLI set up

Step 1: Create a Compute Engine VM

<pre><code>gcloud compute instances create nodejs-instance \
  --zone=us-central1-a \
  --machine-type=e2-micro \
  --image-family=debian-11 \
  --image-project=debian-cloud \
  --tags=nodejs-app </code></pre>

This will:

Install Node.js 18

Clone your GitHub repo

Install dependencies

Start the app in the background on port 8080


Step 2: Allow HTTP Traffic (Port 8080)
Open port 8080 to the public internet:

<pre><code>gcloud compute firewall-rules create allow-http-node \
  --allow=tcp:8080 \
  --target-tags=nodejs-app \
  --description="Allow HTTP traffic to Node.js app on port 8080"</code></pre>
  

Step 3: Access the App

Open this in your browser:

```http://<your-external-ip>:8080```

You will see output as :
