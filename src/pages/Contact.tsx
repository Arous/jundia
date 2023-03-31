import React, {Component} from 'react';

import { MdEmail, MdPhone } from 'react-icons/md/';
import { FaInstagramSquare } from 'react-icons/fa/'


const Contact = () => {
  return (
    <>
      <img
        src="/assets/images_compressed/Circus/Show_Olympic/5.jpg"
        alt="contact"
        className="w-full h-full mt-10"
      />

      <div>
        <div className="text-4xl m-10">
          Contact
        </div>

        <div className="flex justify-center items-center gap-2 m-2">
          <div className="">
            <MdEmail />
          </div>
          <div className="">
            jun8915@naver.com
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 m-2">
          <MdPhone /> +82-10-7430-3730
        </div>

        <div className="flex justify-center items-center gap-2 m-2">
          < FaInstagramSquare /> @jundia_cirque
        </div>
      </div>
    </>
  );
}

export default Contact;