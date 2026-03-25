"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Sparkle } from "@/app/components/Sparkle";
import { getTopicStyle } from "@/lib/styles";
import type { Session } from "@/lib/types";

// ─── XP ──────────────────────────────────────────────────────────────────────
const XP_PER_CARD = 50;
const LS_KEY = "sk_sessions_discovered";

function loadDiscovered(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(LS_KEY) ?? "[]"); } catch { return []; }
}
function saveDiscovered(slugs: string[]) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(slugs)); } catch {}
}
function xpLabel(count: number, total: number): string {
  if (count === 0)          return "Tap a card to begin your collection";
  if (count === total)      return "LEGENDARY — Full collection unlocked";
  if (count >= total * 0.8) return "So close to legendary...";
  if (count >= total * 0.5) return "Session Master status reached";
  if (count >= total * 0.3) return "Explorer Mode: activated";
  return "Collection growing — keep exploring";
}

// ─── Themes ───────────────────────────────────────────────────────────────────
type ThemeKey = "mesh"|"gaming"|"ai"|"minecraft"|"cyber"|"neuro"|"devops"|"video"|"github"|"default";
interface CardTheme { bg:string; artBg:string; accent:string; glow:string; label:string; key:ThemeKey; }

const THEMES: Record<ThemeKey, CardTheme> = {
  mesh:      { bg:"#020c1b", artBg:"radial-gradient(ellipse at 50% 55%,#042535 0%,#010810 100%)", accent:"#2DD4BF", glow:"rgba(45,212,191,0.35)",  label:"IMMERSIVE SPACE",  key:"mesh" },
  gaming:    { bg:"#0d0420", artBg:"radial-gradient(ellipse at 50% 55%,#1a0840 0%,#060112 100%)", accent:"#9B6EFF", glow:"rgba(155,110,255,0.35)", label:"PRESS START",      key:"gaming" },
  ai:        { bg:"#130e00", artBg:"radial-gradient(ellipse at 50% 55%,#281a00 0%,#090600 100%)", accent:"#F59E0B", glow:"rgba(245,158,11,0.30)",  label:"AI POWERED",       key:"ai" },
  minecraft: { bg:"#031203", artBg:"radial-gradient(ellipse at 50% 55%,#062208 0%,#010a01 100%)", accent:"#2DD4BF", glow:"rgba(45,212,191,0.30)",  label:"TEAM QUEST",       key:"minecraft" },
  cyber:     { bg:"#1a030f", artBg:"radial-gradient(ellipse at 50% 55%,#2d0418 0%,#090105 100%)", accent:"#D946EF", glow:"rgba(217,70,239,0.35)",  label:"ZERO TRUST",       key:"cyber" },
  neuro:     { bg:"#06041a", artBg:"radial-gradient(ellipse at 50% 55%,#100830 0%,#030110 100%)", accent:"#9B6EFF", glow:"rgba(155,110,255,0.35)", label:"INFINITE ACCESS",  key:"neuro" },
  devops:    { bg:"#130800", artBg:"radial-gradient(ellipse at 50% 55%,#251000 0%,#080400 100%)", accent:"#F59E0B", glow:"rgba(245,158,11,0.30)",  label:"LEVEL: DEVOPS",    key:"devops" },
  video:     { bg:"#1a0510", artBg:"radial-gradient(ellipse at 50% 55%,#2d0820 0%,#0a0208 100%)", accent:"#F472B6", glow:"rgba(244,114,182,0.35)", label:"CUT. PLAY. CREATE.",key:"video" },
  github:    { bg:"#180a10", artBg:"radial-gradient(ellipse at 50% 55%,#280a18 0%,#080308 100%)", accent:"#F472B6", glow:"rgba(244,114,182,0.35)", label:"PAIR PROGRAMMER",  key:"github" },
  default:   { bg:"#0d0420", artBg:"radial-gradient(ellipse at 50% 55%,#160630 0%,#050110 100%)", accent:"#9B6EFF", glow:"rgba(155,110,255,0.30)", label:"ON STAGE",         key:"default" },
};

function detectTheme(session: Session): CardTheme {
  const t = [...session.tags, session.title, session.topic].join(" ").toLowerCase();
  if (/minecraft/.test(t))                  return THEMES.minecraft;
  if (/zero trust|cybersecurity/.test(t))   return THEMES.cyber;
  if (/neurodiversity|neurodivers/.test(t)) return THEMES.neuro;
  if (/azure devops/.test(t))               return THEMES.devops;
  if (/clipchamp|video editing/.test(t))    return THEMES.video;
  if (/github copilot/.test(t))             return THEMES.github;
  if (/mesh|metaverse|immersive/.test(t))   return THEMES.mesh;
  if (/power apps|gamif|duolingo/.test(t))  return THEMES.gaming;
  if (/\bai\b|copilot|generative/.test(t))  return THEMES.ai;
  return THEMES.default;
}

// ─── Artwork SVGs ─────────────────────────────────────────────────────────────
function MeshArtwork({ a }: { a: string }) {
  const rays = Array.from({ length: 24 }, (_, i) => {
    const angle = (2 * Math.PI * i) / 24;
    return { x1: 120 + 44 * Math.cos(angle), y1: 85 + 44 * Math.sin(angle), x2: 120 + 112 * Math.cos(angle), y2: 85 + 112 * Math.sin(angle) };
  });
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {rays.map((r, i) => <line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={a} strokeWidth="0.5" opacity="0.16" />)}
      <circle cx="120" cy="85" r="52" fill={a} opacity="0.06" />
      <ellipse cx="120" cy="85" rx="93" ry="25" stroke={a} strokeWidth="1.1" opacity="0.55" transform="rotate(-25 120 85)" />
      <ellipse cx="120" cy="85" rx="86" ry="23" stroke={a} strokeWidth="0.7" opacity="0.30" transform="rotate(35 120 85)" />
      <ellipse cx="120" cy="85" rx="82" ry="21" stroke="#9B6EFF" strokeWidth="0.7" opacity="0.25" transform="rotate(95 120 85)" />
      <circle cx="120" cy="85" r="36" stroke={a} strokeWidth="1.8" opacity="0.85" />
      <circle cx="120" cy="85" r="36" fill={a} opacity="0.07" />
      <ellipse cx="120" cy="85" rx="36" ry="11" stroke={a} strokeWidth="0.7" opacity="0.32" />
      <line x1="84" y1="85" x2="156" y2="85" stroke={a} strokeWidth="0.7" opacity="0.28" />
      <circle cx="120" cy="85" r="10" fill={a} opacity="0.32" />
      <circle cx="120" cy="85" r="5"  fill={a} opacity="1" />
      {[0,60,120,180,240,300].map((deg, i) => {
        const rd = ((deg - 25) * Math.PI) / 180;
        return <circle key={i} cx={120 + 93 * Math.cos(rd)} cy={85 + 25 * Math.sin(rd)} r="2.5" fill={a} opacity="0.65" />;
      })}
    </svg>
  );
}

function GamingArtwork({ a }: { a: string }) {
  const grid = [];
  for (let i = 0; i <= 7; i++) { const sp = i * 26; grid.push(<line key={`h${i}`} x1={120-sp} y1={95+i*10} x2={120+sp} y2={95+i*10} stroke={a} strokeWidth="0.4" opacity={0.07+i*0.018} />); }
  for (let i = -4; i <= 4; i++) { grid.push(<line key={`v${i}`} x1={120} y1={90} x2={120+i*48} y2={170} stroke={a} strokeWidth="0.4" opacity="0.12" />); }
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {grid}
      <path d="M62 88 Q55 65 40 70 Q18 76 20 100 Q22 132 54 138 Q72 142 84 120 L156 120 Q168 142 186 138 Q218 132 220 100 Q222 76 200 70 Q185 65 178 88 Z" stroke={a} strokeWidth="2" opacity="0.82" />
      <rect x="67" y="93" width="9" height="24" rx="2" fill={a} opacity="0.75" />
      <rect x="59" y="101" width="24" height="9" rx="2" fill={a} opacity="0.75" />
      <circle cx="166" cy="97"  r="6" stroke={a} strokeWidth="1.4" opacity="0.72" /><circle cx="166" cy="97"  r="2.5" fill={a} opacity="0.85" />
      <circle cx="178" cy="87"  r="6" stroke={a} strokeWidth="1.4" opacity="0.72" /><circle cx="178" cy="87"  r="2.5" fill={a} opacity="0.85" />
      <circle cx="178" cy="107" r="6" stroke={a} strokeWidth="1.4" opacity="0.72" /><circle cx="178" cy="107" r="2.5" fill={a} opacity="0.85" />
      <circle cx="190" cy="97"  r="6" stroke={a} strokeWidth="1.4" opacity="0.72" /><circle cx="190" cy="97"  r="2.5" fill={a} opacity="0.85" />
      <circle cx="120" cy="100" r="10" stroke={a} strokeWidth="1" opacity="0.45" />
      <circle cx="120" cy="100" r="4"  fill={a} opacity="0.6" />
      <path d="M32 34 L34 26 L36 34 L44 36 L36 38 L34 46 L32 38 L24 36 Z" fill="#D946EF" opacity="0.68" />
      <path d="M203 143 L205 137 L207 143 L215 145 L207 147 L205 153 L203 147 L195 145 Z" fill={a} opacity="0.55" />
    </svg>
  );
}

function AIArtwork({ a }: { a: string }) {
  const nodes: [number,number,number][] = [[28,32,5],[28,66,5],[28,100,5],[28,136,5],[90,20,7],[90,55,7],[90,90,7],[90,125,7],[90,152,6],[152,42,8],[152,82,9],[152,122,8],[210,62,6],[210,102,6]];
  const conns = [[0,4],[0,5],[1,4],[1,5],[1,6],[2,5],[2,6],[2,7],[3,6],[3,7],[3,8],[4,9],[4,10],[5,9],[5,10],[5,11],[6,10],[6,11],[7,10],[7,11],[8,11],[9,12],[9,13],[10,12],[10,13],[11,13]];
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {conns.map(([x,y],i) => <line key={i} x1={nodes[x][0]} y1={nodes[x][1]} x2={nodes[y][0]} y2={nodes[y][1]} stroke={a} strokeWidth="0.55" opacity="0.2" />)}
      <circle cx="152" cy="82" r="34" fill={a} opacity="0.05" />
      <circle cx="152" cy="82" r="22" stroke={a} strokeWidth="0.7" opacity="0.18" strokeDasharray="3 4" />
      {nodes.map(([x,y,r],i) => {
        const c = i>=9 && i<=11;
        return <g key={i}><circle cx={x} cy={y} r={r+3} fill={a} opacity={c?0.12:0.05} /><circle cx={x} cy={y} r={r} stroke={a} strokeWidth="1.1" opacity={c?0.9:0.5} /><circle cx={x} cy={y} r={r*0.4} fill={a} opacity={c?1:0.6} /></g>;
      })}
    </svg>
  );
}

function MinecraftArtwork({ a }: { a: string }) {
  const gem=[[0,0,0,1,1,0,0,0],[0,0,1,1,1,1,0,0],[0,1,1,1,1,1,1,0],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0]];
  const S=14,ox=60,oy=30;
  const gridCells = [];
  for(let r=0;r<9;r++) for(let c=0;c<13;c++) gridCells.push(<rect key={`${r}-${c}`} x={c*19} y={r*19} width={18} height={18} stroke={a} strokeWidth="0.3" opacity="0.07" />);
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {gridCells}
      {gem.map((row,r)=>row.map((cell,c)=>cell?<rect key={`${r}-${c}`} x={ox+c*S} y={oy+r*S} width={S-1} height={S-1} fill={a} rx="1.5" opacity={r===3?0.92:r===2||r===4?0.72:0.5} />:null))}
      <rect x="4"   y="4"   width="7" height="7" fill="#9B6EFF" opacity="0.55" rx="1" />
      <rect x="229" y="4"   width="7" height="7" fill="#D946EF" opacity="0.5"  rx="1" />
      <rect x="4"   y="159" width="7" height="7" fill={a}       opacity="0.45" rx="1" />
      <rect x="229" y="159" width="7" height="7" fill={a}       opacity="0.4"  rx="1" />
      <rect x="216" y="80"  width="5" height="5" fill={a}       opacity="0.45" rx="1" />
    </svg>
  );
}

function CyberArtwork({ a }: { a: string }) {
  const hexPts=(cx:number,cy:number,r:number)=>Array.from({length:6},(_,i)=>{const ag=(Math.PI/3)*i-Math.PI/6;return `${cx+r*Math.cos(ag)},${cy+r*Math.sin(ag)}`;}).join(" ");
  const hexes:Array<[number,number,number]>=[[120,85,40],[120,3,22],[183,43,22],[183,127,22],[120,167,22],[57,127,22],[57,43,22],[10,85,14],[230,85,14]];
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {hexes.map(([cx,cy,r],i)=><polygon key={i} points={hexPts(cx,cy,r)} stroke={a} strokeWidth={i===0?2:i<7?0.9:0.5} opacity={i===0?0.85:i<7?0.32:0.18} fill={i===0?a:"none"} fillOpacity={i===0?0.07:0} />)}
      <line x1="0" y1="0" x2="240" y2="170" stroke={a} strokeWidth="0.4" opacity="0.07" />
      <line x1="240" y1="0" x2="0" y2="170" stroke={a} strokeWidth="0.4" opacity="0.07" />
      <rect x="103" y="89" width="34" height="25" rx="4" stroke={a} strokeWidth="1.8" opacity="0.95" />
      <path d="M108 89 L108 79 Q120 69 132 79 L132 89" stroke={a} strokeWidth="1.8" fill="none" opacity="0.95" />
      <circle cx="120" cy="100" r="4.5" fill={a} opacity="0.9" />
      <rect x="118.5" y="100" width="3" height="6" rx="1" fill={a} opacity="0.9" />
      {([[5,5],[235,5],[5,165],[235,165]] as [number,number][]).map(([x,y],i)=><path key={i} d={`M${x} ${y+9} L${x} ${y} L${x+9} ${y}`} stroke={a} strokeWidth="1.5" fill="none" opacity="0.5" transform={`rotate(${i*90} ${x} ${y})`} />)}
    </svg>
  );
}

function NeuroArtwork({ a }: { a: string }) {
  const star4=(cx:number,cy:number,s:number)=>`M${cx} ${cy-s} L${cx+s*.35} ${cy-s*.35} L${cx+s} ${cy} L${cx+s*.35} ${cy+s*.35} L${cx} ${cy+s} L${cx-s*.35} ${cy+s*.35} L${cx-s} ${cy} L${cx-s*.35} ${cy-s*.35} Z`;
  const stars:Array<[number,number,number]>=[[120,48,7],[172,33,5],[197,74,4],[184,126,5],[138,152,4],[72,147,5],[40,112,4],[28,58,5],[63,20,4],[120,90,10]];
  const links=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,0],[0,9],[1,9],[3,9],[5,9],[7,9]];
  const bg = Array.from({length:40},(_,i)=>({ x:(i*61+7)%240, y:(i*43+11)%170, r:i%7===0?1.2:0.7, o:0.18+(i%4)*0.05 }));
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {bg.map((p,i)=><circle key={i} cx={p.x} cy={p.y} r={p.r} fill={a} opacity={p.o} />)}
      {links.map(([x,y],i)=><line key={i} x1={stars[x][0]} y1={stars[x][1]} x2={stars[y][0]} y2={stars[y][1]} stroke={a} strokeWidth="0.65" opacity="0.28" />)}
      <circle cx="120" cy="90" r="58" fill={a} opacity="0.04" />
      {stars.map(([x,y,s],i)=><g key={i}>{i===9&&<circle cx={x} cy={y} r={s+14} fill={a} opacity="0.08" />}<path d={star4(x,y,s)} fill={a} opacity={i===9?1:0.72} /></g>)}
    </svg>
  );
}

function DevOpsArtwork({ a }: { a: string }) {
  const nodes:Array<[number,number]>=[[120,20],[218,85],[120,150],[22,85]];
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      <circle cx="120" cy="85" r="80" stroke={a} strokeWidth="0.7" opacity="0.2" strokeDasharray="6 7" />
      <path d="M120 36 Q218 36 218 85" stroke={a} strokeWidth="1.4" opacity="0.55" fill="none" />
      <path d="M218 85 Q218 150 120 150" stroke={a} strokeWidth="1.4" opacity="0.55" fill="none" />
      <path d="M120 150 Q22 150 22 85" stroke={a} strokeWidth="1.4" opacity="0.55" fill="none" />
      <path d="M22 85 Q22 20 120 20" stroke={a} strokeWidth="1.4" opacity="0.55" fill="none" />
      <polygon points="168,37 163,32 158,41" fill={a} opacity="0.7" />
      <polygon points="218,115 224,110 215,106" fill={a} opacity="0.7" />
      <polygon points="72,149 67,143 77,140" fill={a} opacity="0.7" />
      <polygon points="22,55 16,60 25,64" fill={a} opacity="0.7" />
      {nodes.map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="19" stroke={a} strokeWidth="1.4" opacity="0.72" /><circle cx={x} cy={y} r="19" fill={a} opacity="0.08" /><circle cx={x} cy={y} r="7" fill={a} opacity="0.9" /></g>)}
      <circle cx="120" cy="85" r="22" stroke={a} strokeWidth="1.4" opacity="0.65" />
      <circle cx="120" cy="85" r="22" fill={a} opacity="0.07" />
      <circle cx="120" cy="85" r="8"  fill={a} opacity="0.88" />
    </svg>
  );
}

function VideoArtwork({ a }: { a: string }) {
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {[8,28,48,68,88,108,128,148].map(y=><g key={y}><rect x="4" y={y} width="14" height="15" rx="2.5" stroke={a} strokeWidth="0.9" opacity="0.42" /><rect x="222" y={y} width="14" height="15" rx="2.5" stroke={a} strokeWidth="0.9" opacity="0.42" /></g>)}
      <line x1="22" y1="0" x2="22" y2="170" stroke={a} strokeWidth="0.5" opacity="0.2" />
      <line x1="218" y1="0" x2="218" y2="170" stroke={a} strokeWidth="0.5" opacity="0.2" />
      <circle cx="120" cy="85" r="60" stroke={a} strokeWidth="2" opacity="0.75" />
      <circle cx="120" cy="85" r="60" fill={a} opacity="0.05" />
      <circle cx="120" cy="85" r="50" stroke={a} strokeWidth="0.6" opacity="0.25" />
      <polygon points="106,62 106,108 148,85" fill={a} opacity="0.88" />
      <circle cx="120" cy="85" r="4" fill="#06060f" />
      <path d="M192 24 L194 17 L196 24 L203 26 L196 28 L194 35 L192 28 L185 26 Z" fill="#D946EF" opacity="0.7" />
      <path d="M36 138 L37.5 132 L39 138 L45 140 L39 142 L37.5 148 L36 142 L30 140 Z" fill={a} opacity="0.55" />
    </svg>
  );
}

function GitHubArtwork({ a }: { a: string }) {
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {[20,38,56,74,92,110,128,146].map((y,i)=><line key={i} x1="30" y1={y} x2={90+i*10} y2={y} stroke={a} strokeWidth="0.5" opacity="0.1" />)}
      <circle cx="70" cy="52" r="23" stroke={a} strokeWidth="1.6" opacity="0.82" />
      <path d="M32 138 Q32 94 70 94 Q108 94 108 138" stroke={a} strokeWidth="1.6" fill="none" opacity="0.72" />
      <circle cx="170" cy="52" r="23" stroke="#D946EF" strokeWidth="1.6" opacity="0.82" />
      <path d="M132 138 Q132 94 170 94 Q208 94 208 138" stroke="#D946EF" strokeWidth="1.6" fill="none" opacity="0.72" />
      <path d="M120 52 L112 70 L120 66 L112 86" stroke={a} strokeWidth="2.2" opacity="0.88" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M120 22 L122 15 L124 22 L131 24 L124 26 L122 33 L120 26 L113 24 Z" fill={a} opacity="0.68" />
      <path d="M14 80 L15.5 75 L17 80 L22 81.5 L17 83 L15.5 88 L14 83 L9 81.5 Z" fill="#D946EF" opacity="0.55" />
      <path d="M216 124 L217.5 119 L219 124 L224 125.5 L219 127 L217.5 132 L216 127 L211 125.5 Z" fill={a} opacity="0.5" />
    </svg>
  );
}

function DefaultArtwork({ a }: { a: string }) {
  const star4=(cx:number,cy:number,s:number)=>`M${cx} ${cy-s} L${cx+s*.35} ${cy-s*.35} L${cx+s} ${cy} L${cx+s*.35} ${cy+s*.35} L${cx} ${cy+s} L${cx-s*.35} ${cy+s*.35} L${cx-s} ${cy} L${cx-s*.35} ${cy-s*.35} Z`;
  const rays=Array.from({length:20},(_,i)=>{const ag=(2*Math.PI*i)/20;return{x1:120+32*Math.cos(ag),y1:85+32*Math.sin(ag),x2:120+95*Math.cos(ag),y2:85+95*Math.sin(ag)};});
  return (
    <svg viewBox="0 0 240 170" className="w-full h-full" fill="none">
      {rays.map((r,i)=><line key={i} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={a} strokeWidth="0.5" opacity="0.15" />)}
      <path d="M120 18 L128 68 L180 68 L137 98 L153 148 L120 116 L87 148 L103 98 L60 68 L112 68 Z" stroke={a} strokeWidth="1.8" opacity="0.78" fill={a} fillOpacity="0.07" />
      <circle cx="120" cy="85" r="14" fill={a} opacity="0.32" />
      <circle cx="120" cy="85" r="6"  fill={a} opacity="1" />
      {([[35,28,4.5],[197,27,4],[208,132,4.5],[26,140,4],[10,84,3.5],[230,84,3.5]] as Array<[number,number,number]>).map(([x,y,s],i)=><path key={i} d={star4(x,y,s)} fill={i%2===0?a:"#D946EF"} opacity={i%3===0?0.65:0.45} />)}
    </svg>
  );
}

function CardArtwork({ theme }: { theme: CardTheme }) {
  switch (theme.key) {
    case "mesh":      return <MeshArtwork a={theme.accent} />;
    case "gaming":    return <GamingArtwork a={theme.accent} />;
    case "ai":        return <AIArtwork a={theme.accent} />;
    case "minecraft": return <MinecraftArtwork a={theme.accent} />;
    case "cyber":     return <CyberArtwork a={theme.accent} />;
    case "neuro":     return <NeuroArtwork a={theme.accent} />;
    case "devops":    return <DevOpsArtwork a={theme.accent} />;
    case "video":     return <VideoArtwork a={theme.accent} />;
    case "github":    return <GitHubArtwork a={theme.accent} />;
    default:          return <DefaultArtwork a={theme.accent} />;
  }
}

// ─── XP Bar ───────────────────────────────────────────────────────────────────
function XPBar({ discovered, total }: { discovered: string[]; total: number }) {
  const count = discovered.length;
  const pct   = total === 0 ? 0 : (count / total) * 100;
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-12 py-2.5 md:py-3">
      {/* Single compact row */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-1.5 min-w-0">
          <Sparkle size={8} className="text-[#9B6EFF] flex-shrink-0" />
          <span className="text-[9px] md:text-[10px] font-bold tracking-[0.16em] uppercase text-[#9B6EFF] truncate">
            Collection
          </span>
        </div>
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <span className="text-[11px] text-[#F59E0B] font-black font-mono leading-none">
            {count * XP_PER_CARD}<span className="text-[8px] ml-0.5 font-bold">XP</span>
          </span>
          <span className="text-[9px] text-[#636876] font-mono">{count}&thinsp;/&thinsp;{total}</span>
        </div>
      </div>
      {/* Progress bar — slightly taller on mobile for visibility */}
      <div className="relative h-2 md:h-1.5 rounded-full bg-[rgba(255,255,255,0.07)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg,#9B6EFF 0%,#D946EF 50%,#2DD4BF 100%)",
            boxShadow: pct > 0 ? "0 0 6px rgba(155,110,255,0.5)" : "none",
          }}
        />
      </div>
      {/* Milestone label */}
      <p className="text-[9px] text-[#636876] mt-1.5 tracking-wide leading-none">{xpLabel(count, total)}</p>
    </div>
  );
}

// ─── Session Card ─────────────────────────────────────────────────────────────
interface CardProps { session:Session; index:number; total:number; isDiscovered:boolean; onDiscover:(slug:string)=>void; }

function SessionCard({ session, index, total, isDiscovered, onDiscover }: CardProps) {
  const [flipped, setFlipped]     = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const theme = detectTheme(session);

  const cardNum  = String(index + 1).padStart(2, "0");
  const totalNum = String(total).padStart(2, "0");

  function handleFlip() {
    const next = !flipped;
    setFlipped(next);
    if (next && !isDiscovered) {
      onDiscover(session.slug);
      setShowBurst(true);
      setTimeout(() => setShowBurst(false), 1100);
    }
  }

  // Convert hex accent to rgba
  const rgba = (alpha: number) => {
    const m: Record<string,string> = { "#2DD4BF":`45,212,191`, "#9B6EFF":`155,110,255`, "#D946EF":`217,70,239`, "#F59E0B":`245,158,11`, "#F472B6":`244,114,182` };
    return `rgba(${m[theme.accent]??`155,110,255`},${alpha})`;
  };

  return (
    <div
      className="relative cursor-pointer select-none group flip-wrapper"
      onClick={handleFlip}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleFlip()}
      role="button" tabIndex={0}
      aria-label={`${session.title} — press to flip`}
    >
      {/* Outer hover glow — desktop only */}
      <div className="absolute -inset-1 rounded-[18px] hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 50%, ${theme.glow} 0%, transparent 70%)` }} />

      {/* 3D flip container */}
      <div className={`flip-inner${flipped ? " is-flipped" : ""}`} style={{ aspectRatio:"5/7" }}>

        {/* ── FRONT ───────────────────────────────────────────── */}
        <div className="flip-face">
          <div className="absolute inset-0 rounded-[12px] md:rounded-[14px]" style={{
            padding: "2px",
            background: `linear-gradient(150deg, ${theme.accent}, ${rgba(0.22)}, ${theme.accent})`,
            boxShadow: `0 0 18px ${theme.glow}, 0 4px 24px rgba(0,0,0,0.65)`,
          }}>
            <div className="relative rounded-[10px] md:rounded-[12px] overflow-hidden h-full" style={{ background: theme.bg }}>

              {/* Inner frame accent line */}
              <div className="absolute inset-[3px] rounded-[8px] md:rounded-[10px] pointer-events-none z-20"
                style={{ border:`1px solid ${rgba(0.16)}` }} />

              {/* ── ART ZONE ───────────────────────────────────────
                  Mobile:  65% — bigger art, cleaner impression
                  Desktop: 60% — standard TCG proportions          */}
              <div className="relative overflow-hidden h-[65%] md:h-[60%]">
                <div className="absolute inset-0" style={{ background: theme.artBg }} />
                <div className="absolute inset-0"><CardArtwork theme={theme} /></div>

                {/* Holographic shimmer — desktop only for performance */}
                <div className="absolute inset-0 holo-shimmer hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Bottom fade into name strip */}
                <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
                  style={{ background:"linear-gradient(to bottom, transparent, #04040f)" }} />

                {/* Stat bar — simplified on mobile: gem + card# only */}
                <div className="absolute top-0 left-0 right-0 flex items-start justify-between px-2 pt-2 z-10">
                  {/* Topic gem — shows ✦ when collected */}
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex-shrink-0 flex items-center justify-center font-black text-[9px] md:text-[10px]"
                    style={{ background:`linear-gradient(135deg,${theme.accent},${rgba(0.6)})`, boxShadow:`0 0 8px ${theme.glow}`, color:"#06060f" }}>
                    {isDiscovered ? "✦" : session.topic[0]}
                  </div>
                  {/* Card number — subtle */}
                  <div className="text-[7px] font-mono font-bold tracking-wider px-1 py-0.5 rounded"
                    style={{ background:"rgba(4,4,15,0.72)", color:rgba(0.55), border:`1px solid ${rgba(0.18)}` }}>
                    {cardNum}
                  </div>
                </div>
              </div>

              {/* ── NAME STRIP ─────────────────────────────────────
                  Mobile:  35% — roomy, title is the hero
                  Desktop: 18% — compact TCG style               */}
              <div className="px-3 md:px-2.5 flex flex-col justify-center h-[35%] md:h-[18%]"
                style={{ background:"rgba(2,2,12,0.9)", borderTop:`1px solid ${rgba(0.25)}` }}>
                {/* Theme label */}
                <div className="text-[7px] md:text-[6.5px] font-bold tracking-[0.2em] uppercase mb-1 md:mb-0.5"
                  style={{ color:theme.accent }}>
                  {theme.label}
                </div>
                {/* Session title */}
                <h3 className="text-[11px] md:text-[10px] font-black leading-tight text-white line-clamp-2"
                  style={{ fontFamily:"var(--font-space-grotesk)" }}>
                  {session.title}
                </h3>
                {/* Mobile-only bottom row: first tag + state hint */}
                <div className="flex items-center justify-between mt-2 md:hidden">
                  {session.tags[0] && (
                    <span className="text-[7px] px-1.5 py-0.5 rounded font-medium leading-none"
                      style={{ background:rgba(0.12), color:theme.accent, border:`1px solid ${rgba(0.22)}` }}>
                      {session.tags[0]}
                    </span>
                  )}
                  <span className="text-[8px] ml-auto" style={{ color:rgba(0.45) }}>
                    {isDiscovered ? "✦" : "tap →"}
                  </span>
                </div>
              </div>

              {/* ── EFFECT PANEL — desktop only ──────────────────── */}
              <div className="hidden md:flex px-2.5 py-2 flex-col justify-between h-[22%]"
                style={{ background:"rgba(6,6,15,0.9)" }}>
                <p className="text-[7.5px] leading-relaxed line-clamp-2"
                  style={{ color:"rgba(196,201,212,0.65)" }}>
                  {session.summary}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex gap-1 flex-wrap">
                    {session.tags.slice(0,2).map(tag=>(
                      <span key={tag} className="text-[6px] px-1 py-0.5 rounded font-medium"
                        style={{ background:rgba(0.1), color:theme.accent, border:`1px solid ${rgba(0.22)}` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[7px] font-mono" style={{ color:rgba(0.4) }}>
                    {isDiscovered ? "✦" : "?"}
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── BACK ────────────────────────────────────────────── */}
        <div className="flip-face flip-face-back">
          <div className="absolute inset-0 rounded-[12px] md:rounded-[14px]" style={{
            padding: "2px",
            background: `linear-gradient(150deg, ${theme.accent}, ${rgba(0.22)}, ${theme.accent})`,
            boxShadow: `0 0 18px ${theme.glow}, 0 4px 24px rgba(0,0,0,0.65)`,
          }}>
            <div className="relative rounded-[10px] md:rounded-[12px] overflow-hidden h-full" style={{ background: theme.bg }}>
              {/* Top glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background:`radial-gradient(ellipse 90% 45% at 50% 0%, ${theme.glow} 0%, transparent 60%)` }} />
              {/* Inner frame */}
              <div className="absolute inset-[3px] rounded-[8px] md:rounded-[10px] pointer-events-none z-10"
                style={{ border:`1px solid ${rgba(0.2)}` }} />

              <div className="relative z-10 h-full flex flex-col p-4 md:p-3.5">

                {/* Header row */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`px-2 py-1 md:px-1.5 md:py-0.5 rounded-full text-[8.5px] md:text-[8px] font-bold uppercase tracking-wider ${getTopicStyle(session.topic)}`}>
                    {session.topic}
                  </span>
                  <span className="text-[7.5px] font-mono opacity-40" style={{ color:theme.accent }}>
                    {cardNum}
                  </span>
                </div>

                {/* Accent divider */}
                <div className="mb-3" style={{ height:"1px", background:`linear-gradient(90deg,${theme.accent}70,transparent)` }} />

                {/* Title — larger on mobile for readability */}
                <h3 className="text-[13px] md:text-[12px] font-black leading-snug text-white mb-2.5"
                  style={{ fontFamily:"var(--font-space-grotesk)" }}>
                  {session.title}
                </h3>

                {/* Summary — 3 lines on mobile, 5 on desktop */}
                <p className="text-[10px] md:text-[9.5px] leading-relaxed line-clamp-3 md:line-clamp-5 mb-3 flex-grow"
                  style={{ color:"rgba(196,201,212,0.65)" }}>
                  {session.summary}
                </p>

                {/* Tags — 2 max, bigger touch-friendly pills on mobile */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {session.tags.slice(0,2).map(tag=>(
                    <span key={tag} className="text-[8px] md:text-[7.5px] px-2 md:px-1.5 py-1 md:py-0.5 rounded font-medium"
                      style={{ background:rgba(0.12), color:theme.accent, border:`1px solid ${rgba(0.28)}` }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA — py-3 on mobile for generous touch target */}
                <Link
                  href={`/sessions/${session.slug}`}
                  className="block text-center py-3 md:py-2.5 rounded-xl text-[11px] font-black tracking-wide transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ background:`linear-gradient(135deg,${rgba(0.25)},${rgba(0.12)})`, border:`1px solid ${rgba(0.5)}`, color:theme.accent }}
                  onClick={e=>e.stopPropagation()}>
                  View Full Session &rarr;
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* XP burst */}
      {showBurst && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <span className="xp-burst font-black text-lg tracking-widest"
            style={{ color:theme.accent, textShadow:`0 0 25px ${theme.accent}, 0 0 50px ${theme.glow}` }}>
            +{XP_PER_CARD} XP
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
export default function SessionsGallery({ sessions }: { sessions: Session[] }) {
  const [discovered, setDiscovered] = useState<string[]>([]);
  useEffect(() => { setDiscovered(loadDiscovered()); }, []);
  const handleDiscover = useCallback((slug: string) => {
    setDiscovered(prev => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      saveDiscovered(next);
      return next;
    });
  }, []);

  return (
    <>
      <div className="sticky top-[65px] z-40 border-b border-[rgba(155,110,255,0.1)] bg-[rgba(6,6,15,0.9)] backdrop-blur-md">
        <XPBar discovered={discovered} total={sessions.length} />
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-12 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-7">
          {sessions.map((session, i) => (
            <SessionCard key={session.slug} session={session} index={i} total={sessions.length}
              isDiscovered={discovered.includes(session.slug)} onDiscover={handleDiscover} />
          ))}
        </div>
        <div className="mt-12 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(155,110,255,0.15)]" />
          <span className="text-[10px] text-[#636876] tracking-[0.2em] uppercase">
            {discovered.length === sessions.length ? "Collection complete" : `${sessions.length - discovered.length} card${sessions.length - discovered.length === 1 ? "" : "s"} still hidden`}
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(155,110,255,0.15)]" />
        </div>
      </div>
    </>
  );
}
