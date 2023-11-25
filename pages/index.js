import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    <!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background-color: blue;
        }
        
        h1 {
            color: white;
        }
    </style>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
<link rel="stylesheet" href="https://embed.mottle.com/embed.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
<div class="mottle-bot mottle-chat mottle-chat-right">
  <style>
    .mottle-bot,
    .mottle-bot input {
      font-family: 'Open Sans', sans-serif;
    }
    .mottle-button {
      background: #131722 !important;
      font-size: 1.2em;
      color: #fff;
    }
  </style><div class="mottle-top-bar">
  <div class="mottle-minimized-msg">
    Do you have a question?
  </div>
  </div>
  <div class="mottle-conversation">
    <div class="mottle-messages"></div>
  </div>
  <form>
    <fieldset>
      <input type="hidden" name="bot" value="5dp8X0p8D9gz0g2Kgpnsep6JkNq1-CqwNr9NChwL6ynGxFQPH"/>
      <input type="hidden" name="welcome" value="Hi, how can I help you today?"/>
      <input type="text" class="mottle-query" name="q" placeholder="Ask MottleBot a question..."/>
      <button type="submit" class="mottle-button">Ask</button>
    </fieldset>
  </form>
  <!-- Do not remove logo or link if in free tier -->
  <div class="mottle-logo"><span>
    <a href="https://mottle.com" target="_blank"><img src="https://embed.mottle.com/mottle.svg" alt="Build your own ChatGPT-like chatbot using your own data" width="16" height="16" id="mottle-logo" />Custom Chatbot by Mottle</a></span></div>
</div>
<script async src="https://embed.mottle.com/embed.js"></script>

      <Footer />
    </div>
  )
}
