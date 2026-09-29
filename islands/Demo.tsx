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
    roofitem.style.display = "none";
  }
  function removeFascia() {
    const fasciaitem = document.getElementById("fasciabuttons")!;
    fasciaitem.style.display = "none";
  }
  function removeWall() {
    const wallitem = document.getElementById("wallbuttons")!;
    wallitem.style.display = "none";
  }
  function removeHead() {
    const headitem = document.getElementById("headbuttons")!;
    headitem.style.display = "none";
  }
  function removeGuide() {
    const guideitem = document.getElementById("guidebuttons")!;
    guideitem.style.display = "none";
  }
  function removeCurtain() {
    const curtainitem = document.getElementById("curtainbuttons")!;
    curtainitem.style.display = "none";
  }
  function removeBottom() {
    const bottomitem = document.getElementById("bottombuttons")!;
    bottomitem.style.display = "none";
  }

  function addRoof() {
    const roofitem = document.getElementById("roofbuttons")!;
    roofitem.style.display = "block";
    removeFascia();
    removeWall();
    removeHead();
    removeGuide();
    removeCurtain();
    removeBottom();
  }

  function addFascia() {
    const fasciaitem = document.getElementById("fasciabuttons")!;
    fasciaitem.style.display = "block";
    removeRoof();
    removeWall();
    removeHead();
    removeGuide();
    removeCurtain();
    removeBottom();
  }
  function addWall() {
    const wallitem = document.getElementById("wallbuttons")!;
    wallitem.style.display = "block";
    removeRoof();
    removeFascia();
    removeHead();
    removeGuide();
    removeCurtain();
    removeBottom();
  }
  function addHead() {
    const headitem = document.getElementById("headbuttons")!;
    headitem.style.display = "block";
    removeRoof();
    removeFascia();
    removeWall();
    removeGuide();
    removeCurtain();
    removeBottom();
  }
  function addGuide() {
    const guideitem = document.getElementById("guidebuttons")!;
    guideitem.style.display = "block";
    removeRoof();
    removeFascia();
    removeWall();
    removeHead();
    removeCurtain();
    removeBottom();
  }
  function addCurtain() {
    const curtainitem = document.getElementById("curtainbuttons")!;
    curtainitem.style.display = "block";
    removeRoof();
    removeFascia();
    removeWall();
    removeHead();
    removeGuide();
    removeBottom();
  }
  function addBottom() {
    const bottomitem = document.getElementById("bottombuttons")!;
    bottomitem.style.display = "block";
    removeRoof();
    removeFascia();
    removeWall();
    removeHead();
    removeGuide();
    removeCurtain();
  }

  return (
    <div>
      <div id="lilcanvasyo" class="theCanvas">
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
        <button class="selectChoiceButton" id="roofselector" onClick={() => addRoof()}>Roof</button>
        <button class="selectChoiceButton" id="fasciaselector" onClick={() => addFascia()}>Fascia</button>
        <button class="selectChoiceButton" id="wallselector" onClick={() => addWall()}>Wall</button>
        <button class="selectChoiceButton" id="headselector" onClick={() => addHead()}>Head</button>
        <button class="selectChoiceButton" id="guideselector" onClick={() => addGuide()}>Guide</button>
        <button class="selectChoiceButton" id="curtainselector" onClick={() => addCurtain()}>Curtain</button>
        <button class="selectChoiceButton" id="bottomselector" onClick={() => addBottom()}>Bottom</button>
      </div>

      <div id="roofbuttons" style="position:relative; top:550px; padding:10px; display:block">
        <button class="allbutton" style="background:#000000" onClick={() => setRoof("roof-black")}>black</button>
        <button class="allbutton" style="background:#38525C" onClick={() => setRoof("roof-blue-ridge")}>blue ridge</button>
        <button class="allbutton" style="background:#848377" onClick={() => setRoof("roof-bushland")}>bushland</button>
        <button class="allbutton" style="background:#E9DCB8" onClick={() => setRoof("roof-classic-cream")}>classic cream</button>
        <button class="allbutton" style="background:#304C3C" onClick={() => setRoof("roof-cottage-green")}>cottage green</button>
        <button class="allbutton" style="background:#364152" onClick={() => setRoof("roof-deep-ocean")}>deep ocean</button>
        <button class="allbutton" style="background:#B1ADA3" onClick={() => setRoof("roof-dune")}>dune</button>
        <button class="allbutton" style="background:#C5C2AA" onClick={() => setRoof("roof-evening-haze")}>evening haze</button>
        <button class="allbutton" style="background:#975540" onClick={() => setRoof("roof-headland")}>headland</button>
        <button class="allbutton" style="background:#6C6153" onClick={() => setRoof("roof-jasper")}>jasper</button>
        <button class="allbutton" style="background:#38525C" onClick={() => setRoof("roof-loft")}>loft</button>
        <button class="allbutton" style="background:#5E1D0E" onClick={() => setRoof("roof-manor-red")}>manor red</button>
        <button class="allbutton" style="background:#7C846A" onClick={() => setRoof("roof-pale-eucalypt")}>pale eucalypt</button>
        <button class="allbutton" style="background:#CABFA4" onClick={() => setRoof("roof-paperbark")}>paperbark</button>
        <button class="allbutton" style="background:#D1B988" onClick={() => setRoof("roof-sandbank")}>sandbank</button>
        <button class="allbutton" style="background:#BDBFBA" onClick={() => setRoof("roof-shale-grey")}>shale grey</button>
        <button class="allbutton" style="background:#E4E2D5" onClick={() => setRoof("roof-surfmist")}>surfmist</button>
        <button class="allbutton" style="background:#FFFFFF" onClick={() => setRoof("roof-white")}>white</button>
        <button class="allbutton" style="background:#64715E" onClick={() => setRoof("roof-wilderness")}>wilderness</button>
        <button class="allbutton" style="background:#888B8A" onClick={() => setRoof("roof-windspray")}>windspray</button>
        <button class="allbutton" style="background:#4B4C46" onClick={() => setRoof("roof-woodland-grey")}>woodland grey</button>
      </div>
      <div id="fasciabuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="allbutton" style="background:#000000" onClick={() => setFascia("fascia-black")}>black</button>
        <button class="allbutton" style="background:#38525C" onClick={() => setFascia("fascia-blue-ridge")}>blue ridge</button>
        <button class="allbutton" style="background:#848377" onClick={() => setFascia("fascia-bushland")}>bushland</button>
        <button class="allbutton" style="background:#E9DCB8" onClick={() => setFascia("fascia-classic-cream")}>classic cream</button>
        <button class="allbutton" style="background:#304C3C" onClick={() => setFascia("fascia-cottage-green")}>cottage green</button>
        <button class="allbutton" style="background:#364152" onClick={() => setFascia("fascia-deep-ocean")}>deep ocean</button>
        <button class="allbutton" style="background:#B1ADA3" onClick={() => setFascia("fascia-dune")}>dune</button>
        <button class="allbutton" style="background:#C5C2AA" onClick={() => setFascia("fascia-evening-haze")}>evening haze</button>
        <button class="allbutton" style="background:#975540" onClick={() => setFascia("fascia-headland")}>headland</button>
        <button class="allbutton" style="background:#6C6153" onClick={() => setFascia("fascia-jasper")}>jasper</button>
        <button class="allbutton" style="background:#38525C" onClick={() => setFascia("fascia-loft")}>loft</button>
        <button class="allbutton" style="background:#5E1D0E" onClick={() => setFascia("fascia-manor-red")}>manor red</button>
        <button class="allbutton" style="background:#7C846A" onClick={() => setFascia("fascia-pale-eucalypt")}>pale eucalypt</button>
        <button class="allbutton" style="background:#CABFA4" onClick={() => setFascia("fascia-paperbark")}>paperbark</button>
        <button class="allbutton" style="background:#D1B988" onClick={() => setFascia("fascia-sandbank")}>sandbank</button>
        <button class="allbutton" style="background:#BDBFBA" onClick={() => setFascia("fascia-shale-grey")}>shale grey</button>
        <button class="allbutton" style="background:#E4E2D5" onClick={() => setFascia("fascia-surfmist")}>surfmist</button>
        <button class="allbutton" style="background:#FFFFFF" onClick={() => setFascia("fascia-white")}>white</button>
        <button class="allbutton" style="background:#64715E" onClick={() => setFascia("fascia-wilderness")}>wilderness</button>
        <button class="allbutton" style="background:#888B8A" onClick={() => setFascia("fascia-windspray")}>windspray</button>
        <button class="allbutton" style="background:#4B4C46" onClick={() => setFascia("fascia-woodland-grey")}>woodland grey</button>
      </div>
      <div id="wallbuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="allbutton" onClick={() => setWall("brick-c1")}>1</button>
        <button class="allbutton" onClick={() => setWall("brick-c2")}>2</button>
        <button class="allbutton" onClick={() => setWall("brick-c3")}>3</button>
        <button class="allbutton" onClick={() => setWall("brick-c4")}>4</button>
        <button class="allbutton" onClick={() => setWall("brick-c5")}>5</button>
        <button class="allbutton" onClick={() => setWall("brick-c6")}>6</button>
        <button class="allbutton" onClick={() => setWall("brick-c7")}>7</button>
        <button class="allbutton" onClick={() => setWall("brick-c8")}>8</button>
        <button class="allbutton" onClick={() => setWall("brick-c9")}>9</button>
        <button class="allbutton" onClick={() => setWall("brick-c10")}>10</button>
        <button class="allbutton" onClick={() => setWall("brick-c11")}>11</button>
        <button class="allbutton" onClick={() => setWall("brick-c12")}>12</button>
        <button class="allbutton" onClick={() => setWall("brick-c13")}>13</button>
        <button class="allbutton" onClick={() => setWall("brick-c14")}>14</button>
        <button class="allbutton" onClick={() => setWall("brick-c15")}>15</button>
        <button class="allbutton" onClick={() => setWall("brick-c16")}>16</button>
        <button class="allbutton" onClick={() => setWall("brick-c17")}>17</button>
        <button class="allbutton" onClick={() => setWall("brick-c18")}>18</button>
        <button class="allbutton" onClick={() => setWall("brick-c19")}>19</button>
        <button class="allbutton" onClick={() => setWall("brick-c20")}>20</button>
      </div>
      <div id="headbuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="allbutton" style="background:#000000" onClick={() => setHead("headbox-black")}>black</button>
        <button class="allbutton" style="background:#5E4330" onClick={() => setHead("headbox-brown")}>brown</button>
        <button class="allbutton" style="background:#E9DCB8" onClick={() => setHead("headbox-cream")}>cream</button>
        <button class="allbutton" style="background:#364152" onClick={() => setHead("headbox-deep-ocean")}>deep ocean</button>
        <button class="allbutton" style="background:#304C3C" onClick={() => setHead("headbox-green")}>green</button>
        <button class="allbutton" style="background:#BDBFBA" onClick={() => setHead("headbox-grey")}>grey</button>
        <button class="allbutton" style="background:#6C6153" onClick={() => setHead("headbox-jasper")}>jasper</button>
        <button class="allbutton" style="background:#323233" onClick={() => setHead("headbox-monument")}>monument</button>
        <button class="allbutton" style="background:#5E1D0E" onClick={() => setHead("headbox-red")}>red</button>
        <button class="allbutton" style="background:#CABFA4" onClick={() => setHead("headbox-sand")}>sand</button>
        <button class="allbutton" style="background:#FFFFFF" onClick={() => setHead("headbox-white")}>white</button>
        <button class="allbutton" style="background:#4B4C46" onClick={() => setHead("headbox-woodland-grey")}>woodland grey</button>
      </div>
      <div id="guidebuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="allbutton" style="background:#000000" onClick={() => setGuide("guide-black")}>black</button>
        <button class="allbutton" style="background:#5E4330" onClick={() => setGuide("guide-brown")}>brown</button>
        <button class="allbutton" style="background:#E9DCB8" onClick={() => setGuide("guide-cream")}>cream</button>
        <button class="allbutton" style="background:#364152" onClick={() => setGuide("guide-deep-ocean")}>deep ocean</button>
        <button class="allbutton" style="background:#304C3C" onClick={() => setGuide("guide-green")}>green</button>
        <button class="allbutton" style="background:#BDBFBA" onClick={() => setGuide("guide-grey")}>grey</button>
        <button class="allbutton" style="background:#6C6153" onClick={() => setGuide("guide-jasper")}>jasper</button>
        <button class="allbutton" style="background:#323233" onClick={() => setGuide("guide-monument")}>monument</button>
        <button class="allbutton" style="background:#5E1D0E" onClick={() => setGuide("guide-red")}>red</button>
        <button class="allbutton" style="background:#CABFA4" onClick={() => setGuide("guide-sand")}>sand</button>
        <button class="allbutton" style="background:#FFFFFF" onClick={() => setGuide("guide-white")}>white</button>
        <button class="allbutton" style="background:#4B4C46" onClick={() => setGuide("guide-woodland-grey")}>woodland grey</button>
      </div>
      <div id="curtainbuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="allbutton" style="background:#B8A498" onClick={() => setCurtain("curtain-beige")}>beige</button>
        <button class="allbutton" style="background:#000000" onClick={() => setCurtain("curtain-black")}>black</button>
        <button class="allbutton" style="background:#5E4330" onClick={() => setCurtain("curtain-brown")}>brown</button>
        <button class="allbutton" style="background:#E9DCB8" onClick={() => setCurtain("curtain-cream")}>cream</button>
        <button class="allbutton" style="background:#364152" onClick={() => setCurtain("curtain-deep-ocean")}>deep ocean</button>
        <button class="allbutton" style="background:#304C3C" onClick={() => setCurtain("curtain-green")}>green</button>
        <button class="allbutton" style="background:#BDBFBA" onClick={() => setCurtain("curtain-grey")}>grey</button>
        <button class="allbutton" style="background:#6C6153" onClick={() => setCurtain("curtain-jasper")}>jasper</button>
        <button class="allbutton" style="background:#323233" onClick={() => setCurtain("curtain-monument")}>monument</button>
        <button class="allbutton" style="background:#5E1D0E" onClick={() => setCurtain("curtain-red")}>red</button>
        <button class="allbutton" style="background:#CABFA4" onClick={() => setCurtain("curtain-sand")}>sand</button>
        <button class="allbutton" style="background:#FFFFFF" onClick={() => setCurtain("curtain-white")}>white</button>
        <button class="allbutton" style="background:#4B4C46" onClick={() => setCurtain("curtain-woodland-grey")}>woodland grey</button>
      </div>
      <div id="bottombuttons" style="position:relative; top:550px; padding:10px; display:none">
        <button class="allbutton" style="background:#000000" onClick={() => setBottom("bottom-slat-black")}>black</button>
        <button class="allbutton" style="background:#5E4330" onClick={() => setBottom("bottom-slat-brown")}>brown</button>
        <button class="allbutton" style="background:#E9DCB8" onClick={() => setBottom("bottom-slat-cream")}>cream</button>
        <button class="allbutton" style="background:#364152" onClick={() => setBottom("bottom-slat-deep-ocean")}>deep ocean</button>
        <button class="allbutton" style="background:#304C3C" onClick={() => setBottom("bottom-slat-green")}>green</button>
        <button class="allbutton" style="background:#BDBFBA" onClick={() => setBottom("bottom-slat-grey")}>grey</button>
        <button class="allbutton" style="background:#6C6153" onClick={() => setBottom("bottom-slat-jasper")}>jasper</button>
        <button class="allbutton" style="background:#323233" onClick={() => setBottom("bottom-slat-monument")}>monument</button>
        <button class="allbutton" style="background:#5E1D0E" onClick={() => setBottom("bottom-slat-red")}>red</button>
        <button class="allbutton" style="background:#CABFA4" onClick={() => setBottom("bottom-slat-sand")}>sand</button>
        <button class="allbutton" style="background:#FFFFFF" onClick={() => setBottom("bottom-slat-white")}>white</button>
        <button class="allbutton" style="background:#4B4C46" onClick={() => setBottom("bottom-slat-woodland-grey")}>woodland grey</button>
      </div>
    </div>
  );
}
