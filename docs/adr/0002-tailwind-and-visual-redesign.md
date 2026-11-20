# Tailwind replaces Bootstrap, and this migration includes a full visual redesign

The tech-stack migration (Bootstrap → Tailwind, HTML → React/TS) was deliberately extended to include an actual visual redesign — a new color palette derived from the studio's logo (navy primary, soft sky-blue secondary, magenta used sparingly as an accent), new typography (Quicksand/Inter), and freedom to restructure page layout — rather than a like-for-like reskin of the existing Bootstrap design in Tailwind utility classes.

## Considered Options

A faithful 1:1 reskin (same layout, same navbar blue `#5E99C8`, same spacing, only the CSS engine changes) was recommended instead, to keep the diff reviewable as a pure tooling change. Rejected in favor of bundling the redesign into this migration, with all existing content preserved and accessibility/user-friendliness treated as the top design constraint given the site's audience.
