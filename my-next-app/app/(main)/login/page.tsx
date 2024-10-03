import Script from "next/script";
import React from "react";

export default function Page() {
  return (
    <>
      <header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-col justify-center items-center w-full">
          {/* <Script async src='https://telegram.org/js/telegram-widget.js' data-telegram-login='MagisterUniversBot' data-size="large" /> */}
          <Script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-login="MagisterUniversBot" data-size="large" data-auth-url="http://127.0.0.1/admin" data-request-access="write"></Script>
        </div>
      </main >
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center" />
    </>
  )
}
