"use client";

import React, { useState } from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

function Page() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // stop form submit
    setOpen(true); // buka alert
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-200">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* email, subject, message */}
          <div>
            <label htmlFor="email">Your email</label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" required />
          </div>
          <div>
            <label htmlFor="message">Your message</label>
            <textarea id="message" rows={6} required />
          </div>

          <AlertDialog.Root open={open} onOpenChange={setOpen}>
            <AlertDialog.Trigger asChild>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Send Message
              </button>
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
              <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
              <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
                <AlertDialog.Title className="text-lg font-bold">
                  Pesan Terkirim!
                </AlertDialog.Title>
                <AlertDialog.Description className="mt-2 text-sm">
                  Terima kasih sudah mengirim pesan. Kami akan segera
                  merespon.
                </AlertDialog.Description>

                <div className="mt-4 flex justify-end gap-2">
                  <AlertDialog.Cancel asChild>
                    <button className="px-4 py-2 bg-gray-200 rounded">
                      Tutup
                    </button>
                  </AlertDialog.Cancel>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </form>
      </div>
    </section>
  );
}

export default Page;
