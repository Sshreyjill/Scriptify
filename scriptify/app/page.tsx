'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage:
          "url('https://t3.ftcdn.net/jpg/04/73/78/96/360_F_473789682_zFhtTAvdjkq5d9NkUrWw8yaN8MpoMVRI.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          padding: "30px 60px",
          borderRadius: "20px",
          boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "800px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: "30px" }}>
          <Image
            src="/logo.svg"
            alt="Scriptify Logo"
            width={200}
            height={200}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        <h2
          style={{
            fontSize: "3.5rem",
            fontWeight: "bold",
            marginBottom: "20px",
            letterSpacing: "2px",
            color: "#BDBDBD",
            fontFamily: "'Times New Roman'",
          }}
        >
          Welcome to Scriptify!
        </h2>

        <p
          style={{
            fontSize: "1rem",
            marginBottom: "15px",
            color: "rgba(255, 255, 255, 0.9)",
            lineHeight: "1.6",
            fontWeight: "lighter",
            letterSpacing: "1px",
          }}
        >
          Unlock the full potential of AI and effortlessly generate high-quality content in seconds. Boost your productivity and stay ahead in the ever-evolving digital world.
        </p>

        <Link href="/dashboard">
          <Button
            variant="destructive"
            style={{
              padding: "16px 32px",
              fontSize: "1.5rem",
              borderRadius: "10px",
              backgroundColor: "#424242",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#616161";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#424242";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
