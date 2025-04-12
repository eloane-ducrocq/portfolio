"use client";
import React from "react";
import { useContactForm } from "./contact";
import './page.css';

export default function ContactForm() {
  const { formData, handleChange } = useContactForm();

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative">
        <h1 className="text-[3rem] font-bold text-center mb-8 m-[10px]">
          Me Contactez
        </h1>

        <div className="absolute bottom-[-400px] left-[-100px] w-60 h-60 bg-[#25aaa5] rounded-full filter blur-2xl opacity-40 animate-blob1"></div>
        <div className="absolute bottom-[-80px] right-[-100px] w-80 h-80 bg-[#25aaa5] rounded-full filter blur-3xl opacity-30 animate-blob2"></div>
      </div>
      <form
        action="https://formspree.io/f/mrbpoqwa"
        method="POST"
        className="max-w-2xl mx-auto bg-[#1a1a1a] p-10 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Entrez votre nom"
            className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-gray-700 text-white focus:ring-[#25aaa5] focus:border-[#25aaa5] transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Entrez votre email"
            className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-gray-700 text-white focus:ring-[#25aaa5] focus:border-[#25aaa5] transition"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Votre message"
            className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-gray-700 text-white focus:ring-[#25aaa5] focus:border-[#25aaa5] transition resize-none"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#25aaa5] via-[#25aaa5] to-[#1e938f] text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:brightness-110 transition-all duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
