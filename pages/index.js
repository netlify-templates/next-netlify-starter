import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react';

export default function Home() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [date, setDate] = useState("");
  const [movie, setMovie] = useState("");
  const [dob, setDob] = useState("");
  const [data, setData] = useState(false);

  return (
    <div className="container">
      <Head>
        <title>Harshi!</title>
      </Head>

      <main>
        {
          data && (
            <>
              My Dear Harshi...
              <br/>I know you are all irritated and frustrated due to the ongoing trip.
              <br/>I just didn't want you to scold yuvi for nothing. 
              <br/>I thought you would have done that and that's why 
              <br/>I was just consoling him, making him cheer up with lame jokes.
              <br/>I never wanted to hurt you my Love 💗.
              <br/>I am really really sorry Harshi, if i did hurt you 😣.
              <br/>Please forgive me miss beautiful.
              <br/>Having super pretty nails 💅🏻 and that gorgeous ring in your hand 💍.
              <br/>At the end, I can just say, <bold>I love you Harshi!!</bold>
            </>
          )
        }
        {
          quizStarted && !data && (<>
            <Header title="Let's do the Authorization First 😁" />
            <Header title="Not for you Yuvi" />
            <div className="mb-3">
              <label htmlFor="nameInput"
                className="form-label">
                Date when we first met ("DD/MM"):
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nameInput"
                className="form-label">
                Our First Movie (Lowercase):
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={movie}
                onChange={(e) =>
                  setMovie(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nameInput"
                className="form-label">
                DOB ("DDMM"):
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                value={dob}
                onChange={(e) =>
                  setDob(e.target.value)}
              />
            </div>
            <button
              onClick={() => setData(true)}
              className="button-62"
              // Disable button if name is empty or whitespace
              disabled={!(date === "26/01" && movie === "fighter" && dob === "3005")}
            >
              Welcome Harshi!!
            </button>
          </>)
        }
        {
          !quizStarted && !data && (
            <>
              <Header title="Welcome to our Harshi's Life 😍" />
              <button
                onClick={() => setQuizStarted(true)}
                className="button-33"
              >
                Continue
              </button>
            </>)
        }
      </main>

    </div >
  )
}
