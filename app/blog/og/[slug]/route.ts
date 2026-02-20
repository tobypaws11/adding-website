import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { createElement } from "react";
import { getPostBySlug } from "@/lib/blog-data";

export const runtime = "edge";

export async function GET(_request: NextRequest, { params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const categoryColors: Record<string, string> = {
    seo: "#008FF0",
    ai: "#7C3AED",
    auto: "#D97706",
    leads: "#059669",
    marketing: "#C026D3",
  };
  const accent = categoryColors[post.categoryKey] ?? "#008FF0";

  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          width: "1200px",
          height: "630px",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          fontFamily: "sans-serif",
          position: "relative",
        },
      },
      createElement("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "6px",
          background: accent,
        },
      }),
      createElement("div", {
        style: {
          position: "absolute",
          top: "40px",
          right: "60px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
        },
      }),
      createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
          },
        },
        createElement(
          "div",
          {
            style: {
              background: `${accent}22`,
              border: `1px solid ${accent}66`,
              borderRadius: "999px",
              padding: "6px 18px",
              fontSize: "13px",
              fontWeight: 700,
              color: accent,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            },
          },
          post.category
        ),
        createElement(
          "div",
          {
            style: {
              marginLeft: "16px",
              fontSize: "13px",
              color: "#ffffff55",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            },
          },
          `${post.readingTime} min de lectura`
        )
      ),
      createElement(
        "div",
        {
          style: {
            fontSize: post.title.length > 60 ? "42px" : "52px",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "900px",
            marginBottom: "28px",
          },
        },
        post.title
      ),
      createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
        },
        createElement(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "12px",
            },
          },
          createElement(
            "div",
            {
              style: {
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: `${accent}33`,
                border: `2px solid ${accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                fontWeight: 900,
                color: accent,
              },
            },
            "JM"
          ),
          createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
              },
            },
            createElement(
              "span",
              {
                style: {
                  color: "#ffffffcc",
                  fontSize: "15px",
                  fontWeight: 700,
                },
              },
              post.author
            ),
            createElement(
              "span",
              {
                style: {
                  color: "#ffffff44",
                  fontSize: "13px",
                },
              },
              post.authorRole
            )
          )
        ),
        createElement(
          "div",
          {
            style: {
              fontSize: "22px",
              fontWeight: 900,
              color: accent,
              letterSpacing: "-0.02em",
            },
          },
          "AdDing Agency"
        )
      ),
      createElement("div", {
        style: {
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "2px",
          background: `linear-gradient(to right, ${accent}, transparent)`,
        },
      })
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
