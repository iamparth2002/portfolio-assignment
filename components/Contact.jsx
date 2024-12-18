'use client'
import { useState } from 'react';
import { Button, Input } from './../components/MTtailwind';

const Contact = ({ DATA }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // Reset status

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="dark px-4 sm:px-6 mx-auto grid pb-4 pt-16"
    >
      <a href="#contact">
        <h1 className="text-4xl font-semibold underline">Contact</h1>
      </a>
      <br />
      <article className="flex flex-col md:flex-row pt-3 gap-8 justify-between">
        <div className="flex flex-col gap-4 justify-between basis-1/2">
          <div className="border-l-2 border-gray-500 pl-3">
            <p className="-mt-1 font-medium bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text inline-block text-transparent text-white">
              Looking to make an impact! Reach out to discuss potential roles,
              project collaborations, or just to connect.
            </p>
          </div>
          {/* Social Links */}
          <ul className="flex flex-wrap md:flex-col text-foreground/90 gap-4 md:justify-end">
            <li>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${DATA?.contact?.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline flex gap-2 items-center w-fit"
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x={3}
                    y={5}
                    width={18}
                    height={14}
                    rx={2}
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                {DATA?.contact?.email}
              </a>
            </li>
            <li>
              <a
                href={DATA?.contact?.social?.LinkedIn?.url}
                target="_blank"
                rel="noreferrer"
                className="underline flex gap-2 items-center w-fit"
              >
                <svg viewBox="0 0 128 128" height={20} width={20}>
                  <path
                    fill="#0076b2"
                    d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                  />
                  <path
                    fill="#fff"
                    d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={DATA?.contact?.social?.GitHub?.url}
                target="_blank"
                rel="noreferrer"
                className="underline flex gap-2 items-center w-fit"
              >
                <svg viewBox="0 0 128 128" height={20} width={20}>
                  <g fill="#fff">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    />
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
                  </g>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a
                href={DATA?.contact?.social?.X?.url}
                target="_blank"
                rel="noreferrer"
                className="underline flex gap-2 items-center w-fit"
              >
                <svg viewBox="0 0 128 128" height={16} width={16}>
                  <path
                    d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z"
                    fill="#fff"
                    style={{ strokeWidth: '0.104373' }}
                  />
                </svg>
                Twitter / X
              </a>
            </li>
          </ul>
        </div>
        <form className="flex flex-col gap-4 basis-1/2" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <Input
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="standard"
                color="white"
              />
            </div>
            <div>
              <Input
                name="email"
                label="Email*"
                value={formData.email}
                onChange={handleChange}
                required
                variant="standard"
                color="white"
              />
            </div>
          </div>
          <div>
            <Input
              name="subject"
              label="Subject*"
              value={formData.subject}
              onChange={handleChange}
              required
              variant="standard"
              color="white"
            />
          </div>
          <div className="relative w-full min-w-[200px]">
            <textarea
              name="message"
              className="peer h-full min-h-[100px] w-full text-white resize-none border-b border-white bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-white focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            className="bg-[#7c3aed] z-0 p-2 rounded-lg relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap overflow-hidden outline-none bg-default/40 font-bold bg-gradient-to-br from-violet-600 to-blue-600 text-foreground text-md hover:from-blue-600 hover:to-green-600"
            type="submit"
          >
            SUBMIT
          </button>
          {status && (
            <p className="text-sm text-white mt-2">{status}</p>
          )}
        </form>
      </article>
    </section>
  );
};

export default Contact;
