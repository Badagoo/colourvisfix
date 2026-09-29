import { Button } from "../components/Button.tsx";
import { useState } from "preact/hooks";

export default function Demo() {
  const [roof, setRoof] = useState<string>("roof-bushland");
  const [fascia, setFascia] = useState<string>("fascia-bushland");
  const [wall, setWall] = useState<string>("brick-c1");
  const [head, setHead] = useState<string>("headbox-woodland-grey");
  const [guide, setGuide] = useState<string>("guide-woodland-grey");
  const [curtain, setCurtain] = useState<string>("curtain-woodland-grey");
  const [bottom, setBottom] = useState<string>("bottom-slat-woodland-grey");
  const [pattern, setPattern] = useState<[string, string]>(["", ""]);

  function removeRoof() {
    const roofitem = document.getElementById("roofbuttons")!;
    const roofselector = document.getElementById("roofselector")!;
    roofitem.style.display = "none";
    roofselector.style.backgroundColor = "white";
  }
  function removeFascia() {
    const fasciaitem = document.getElementById("fasciabuttons")!;
    const fasciaselector = document.getElementById("fasciaselector")!;
    fasciaitem.style.display = "none";
    fasciaselector.style.backgroundColor = "white";
  }
  function removeWall() {
    const wallitem = document.getElementById("wallbuttons")!;
    const wallselector = document.getElementById("wallselector")!;
    wallitem.style.display = "none";
    wallselector.style.backgroundColor = "white";
  }
  function removeHead() {
    const headitem = document.getElementById("headbuttons")!;
    const headselector = document.getElementById("headselector")!;
    headitem.style.display = "none";
    headselector.style.backgroundColor = "white";
  }
  function removeGuide() {
    const guideitem = document.getElementById("guidebuttons")!;
    const guideselector = document.getElementById("guideselector")!;
    guideitem.style.display = "none";
    guideselector.style.backgroundColor = "white";
  }
  function removeCurtain() {
    const curtainitem = document.getElementById("curtainbuttons")!;
    const curtainselector = document.getElementById("curtainselector")!;
    curtainitem.style.display = "none";
    curtainselector.style.backgroundColor = "white";
  }
  function removeBottom() {
    const bottomitem = document.getElementById("bottombuttons")!;
    const bottomselector = document.getElementById("bottomselector")!;
    bottomitem.style.display = "none";
    bottomselector.style.backgroundColor = "white";
  }

  function addRoof() {
    const roofitem = document.getElementById("roofbuttons")!;
    const roofselector = document.getElementById("roofselector")!;
    roofitem.style.display = "block";
    roofselector.style.backgroundColor = "lightgrey";
    removeFascia();
    removeWall();
    removeHead();
    removeGuide();
    removeCurtain();
    removeBottom();
  }

  function addFascia() {
    const fasciaitem = document.getElementById("fasciabuttons")!;
    const fasciaselector = document.getElementById("fasciaselector")!;
    fasciaitem.style.display = "block";
    fasciaselector.style.backgroundColor = "lightgrey";
    removeRoof();
    removeWall();
    removeHead();
    removeGuide();
    removeCurtain();
    removeBottom();
  }
  function addWall() {
    const wallitem = document.getElementById("wallbuttons")!;
    const wallselector = document.getElementById("wallselector")!;
    wallitem.style.display = "block";
    wallselector.style.backgroundColor = "lightgrey";
    removeRoof();
    removeFascia();
    removeHead();
    removeGuide();
    removeCurtain();
    removeBottom();
  }
  function addHead() {
    const headitem = document.getElementById("headbuttons")!;
    const headselector = document.getElementById("headselector")!;
    headitem.style.display = "block";
    headselector.style.backgroundColor = "lightgrey";
    removeRoof();
    removeFascia();
    removeWall();
    removeGuide();
    removeCurtain();
    removeBottom();
  }
  function addGuide() {
    const guideitem = document.getElementById("guidebuttons")!;
    const guideselector = document.getElementById("guideselector")!;
    guideitem.style.display = "block";
    guideselector.style.backgroundColor = "lightgrey";
    removeRoof();
    removeFascia();
    removeWall();
    removeHead();
    removeCurtain();
    removeBottom();
  }
  function addCurtain() {
    const curtainitem = document.getElementById("curtainbuttons")!;
    const curtainselector = document.getElementById("curtainselector")!;
    curtainitem.style.display = "block";
    curtainselector.style.backgroundColor = "lightgrey";
    removeRoof();
    removeFascia();
    removeWall();
    removeHead();
    removeGuide();
    removeBottom();
  }
  function addBottom() {
    const bottomitem = document.getElementById("bottombuttons")!;
    const bottomselector = document.getElementById("bottomselector")!;
    bottomitem.style.display = "block";
    bottomselector.style.backgroundColor = "lightgrey";
    removeRoof();
    removeFascia();
    removeWall();
    removeHead();
    removeGuide();
    removeCurtain();
  }

  return (
    <div>
      <div id="lilcanvasyo">
        <div style="position:absolute">
          <img
            class="ccolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${curtain}.png`}
          />
        </div>
        <div style="position:absolute">
          <img
            class="rcolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${roof}.png`}
          />
        </div>
        <div style="position:absolute">
          <img
            class="fcolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${fascia}.png`}
          />
        </div>
        <div style="position:absolute">
          <img
            class="wcolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${wall}.png`}
          />
        </div>
        <div style="position:absolute">
          <img
            class="bcolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${bottom}.png`}
          />
        </div>
        <div style="position:absolute">
          <img
            class="gcolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${guide}.png`}
          />
        </div>
        <div style="position:absolute">
          <img
            class="hcolor selected"
            src={`https://raw.githubusercontent.com/Badagoo/auwrsthing/main/${head}.png`}
          />
        </div>
      </div>

      <div id="selector" style="position:relative; top:550px">
        <button class="px-2 py-1 border(gray-100 2)" id="roofselector" onClick={() => addRoof()}>Roof</button>
        <button class="px-2 py-1 border(gray-100 2)" id="fasciaselector" onClick={() => addFascia()}>Fascia</button>
        <button class="px-2 py-1 border(gray-100 2)" id="wallselector" onClick={() => addWall()}>Wall</button>
        <button class="px-2 py-1 border(gray-100 2)" id="headselector" onClick={() => addHead()}>Head</button>
        <button class="px-2 py-1 border(gray-100 2)" id="guideselector" onClick={() => addGuide()}>Guide</button>
        <button class="px-2 py-1 border(gray-100 2)" id="curtainselector" onClick={() => addCurtain()}>Curtain</button>
        <button class="px-2 py-1 border(gray-100 2)" id="bottomselector" onClick={() => addBottom()}>Bottom</button>
      </div>

      <div id="roofbuttons" style="position:relative; top:550px; padding:10px; display:block">
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-black")}>black</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-blue-ridge")}>blue ridge</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-bushland")}>bushland</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-classic-cream")}>classic cream</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-cottage-green")}>cottage green</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-deep-ocean")}>deep ocean</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-dune")}>dune</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-evening-haze")}>evening haze</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-headland")}>headland</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-jasper")}>jasper</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-loft")}>loft</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-manor-red")}>manor red</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-pale-eucalypt")}>pale eucalypt</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-paperbark")}>paperbark</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-sandbank")}>sandbank</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-shale-grey")}>shale grey</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-surfmist")}>surfmist</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-white")}>white</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-wilderness")}>wilderness</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-windspray")}>windspray</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setRoof("roof-woodland-grey")}>woodland grey</button>
      </div>
      <div id="fasciabuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-black")}>black</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-blue-ridge")}>blue ridge</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-bushland")}>bushland</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-classic-cream")}>classic cream</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-cottage-green")}>cottage green</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-deep-ocean")}>deep ocean</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-dune")}>dune</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-evening-haze")}>evening haze</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-headland")}>headland</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-jasper")}>jasper</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-loft")}>loft</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-manor-red")}>manor red</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-pale-eucalypt")}>pale eucalypt</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-paperbark")}>paperbark</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-sandbank")}>sandbank</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-shale-grey")}>shale grey</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-surfmist")}>surfmist</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-white")}>white</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-wilderness")}>wilderness</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-windspray")}>windspray</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setFascia("fascia-woodland-grey")}>woodland grey</button>
      </div>
      <div id="wallbuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c1")}>1</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c2")}>2</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c3")}>3</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c4")}>4</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c5")}>5</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c6")}>6</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c7")}>7</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c8")}>8</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c9")}>9</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c10")}>10</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c11")}>11</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c12")}>12</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c13")}>13</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c14")}>14</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c15")}>15</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c16")}>16</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c17")}>17</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c18")}>18</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c19")}>19</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setWall("brick-c20")}>20</button>
      </div>
      <div id="headbuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-black")}>black</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-brown")}>brown</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-cream")}>cream</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-deep-ocean")}>deep ocean</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-green")}>green</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-grey")}>grey</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-jasper")}>jasper</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-monument")}>monument</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-red")}>red</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-sand")}>sand</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-white")}>white</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setHead("headbox-woodland-grey")}>woodland grey</button>
      </div>
      <div id="guidebuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-black")}>black</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-brown")}>brown</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-cream")}>cream</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-deep-ocean")}>deep ocean</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-green")}>green</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-grey")}>grey</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-jasper")}>jasper</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-monument")}>monument</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-red")}>red</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-sand")}>sand</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-white")}>white</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setGuide("guide-woodland-grey")}>woodland grey</button>
      </div>
      <div id="curtainbuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-beige")}>beige</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-black")}>black</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-brown")}>brown</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-cream")}>cream</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-deep-ocean")}>deep ocean</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-green")}>green</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-grey")}>grey</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-jasper")}>jasper</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-monument")}>monument</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-red")}>red</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-sand")}>sand</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-white")}>white</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setCurtain("curtain-woodland-grey")}>woodland grey</button>
      </div>
      <div id="bottombuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="px-2 py-1 border(gray-100 2) allbutton" onClick={() => setBottom("bottom-slat-black")}>black</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-brown")}>brown</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-cream")}>cream</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-deep-ocean")}>deep ocean</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-green")}>green</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-grey")}>grey</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-jasper")}>jasper</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-monument")}>monument</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-red")}>red</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-sand")}>sand</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-white")}>white</button>
        <button class="px-2 py-1 border(gray-100 2)" onClick={() => setBottom("bottom-slat-woodland-grey")}>woodland grey</button>
      </div>
    </div>
  );
}
