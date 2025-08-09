// pages/index.js
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

export default function Home() {
  const router = useRouter()
  const { title: qTitle, gpt: qGpt } = router.query

  // クエリを文字列に整形
  const title = useMemo(() => (typeof qTitle === 'string' ? qTitle : ''), [qTitle])
  const gpt   = useMemo(() => (typeof qGpt   === 'string' ? qGpt   : ''), [qGpt])

  const [status, setStatus] = useState('')
  const [showUrl, setShowUrl] = useState(false)

  // クリップボードコピー（失敗時は案内だけ表示）
  const copyHeadline = async () => {
    try {
      if (title) {
        await navigator.clipboard.writeText(title)
        setStatus('✅ 見出しをコピーしました。')
      } else {
        setStatus('⚠️ 見出しが取得できませんでした。リンクを確認してください。')
      }
    } catch (e) {
      setStatus('⚠️ 自動コピーに失敗。必要なら長押し/ドラッグで手動コピーしてください。')
    }
  }

  // 同一タブでChatGPTを開く（新規タブは使わない）
  const openChatGPT = () => {
    if (!gpt) {
      setStatus('⚠️ ChatGPTリンクが無効です。')
      return
    }
    try {
      // Drive/Gmailの内蔵ビューア誤爆を避けるため top.location を優先
      window.top.location.href = gpt
    } catch {
      window.location.href = gpt
    }
  }

  useEffect(() => {
    // 初期メッセージ
    setStatus('')
  }, [title, gpt])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>見出しをコピーしてChatGPTへ</title>
      </Head>

      <div className="wrap">
        <div className="card">
          <div className="title">見出しをコピーしてから、ChatGPTへ移動します（同一タブ）。</div>
          <div>見出し：<code className="code" id="headline">{title || '(未取得)'}</code></div>
          <div className="note">※ Googleドメインは経由しません。外部ホスティングから直接ChatGPTを開きます。</div>
          <div className="note status">{status}</div>

          <button className="btn btn-copy" onClick={copyHeadline}>① 見出しをコピー</button>
          <button className="btn btn-go" onClick={openChatGPT} rel="noreferrer">② ChatGPT を開く（同一タブ）</button>
          <button className="btn btn-url" onClick={() => setShowUrl(true)}>リンクが開けない場合はこちら</button>

          {showUrl && (
            <div className="note urlbox">
              うまく開けない場合は、下のリンクを<strong>長押し→“開く”</strong>で開いてください：<br />
              <a href={gpt || '#'} rel="noreferrer">{gpt || '(リンク未設定)'}</a>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .wrap { font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif; line-height:1.8; padding:20px; }
        .card { border:1px solid #eee; border-radius:12px; padding:16px; background:#fff; max-width:720px; margin:0 auto; }
        .title { font-weight:700; margin-bottom:6px; }
        .note { font-size:12px; color:#666; }
        .status { margin-top:6px; }
        .code { background:#f6f8fa; border:1px solid #eee; padding:3px 6px; border-radius:6px; }
        .btn { display:block; width:100%; padding:12px 14px; border-radius:10px; text-align:center; text-decoration:none; font-weight:600; border:none; cursor:pointer; }
        .btn-copy { background:#111; color:#fff; margin-top:12px; }
        .btn-go { background:#1a73e8; color:#fff; margin-top:10px; }
        .btn-url { background:#f0f3f6; color:#111; margin-top:10px; }
        .urlbox { border-top:1px dashed #ddd; margin-top:12px; padding-top:12px; }
      `}</style>
    </>
  )
}
