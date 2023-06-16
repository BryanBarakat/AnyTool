import React from "react";
import TextToSlug from "../../assets/link.png";
import "./Tools.css";
import { Footer } from "../Footer/Footer";
import textCap from "../../assets/toy-block.png";
import counter from "../../assets/counter.png";
import gachapon from "../../assets/gachapon.png";
import lineBreak from "../../assets/line-break.png";
import lorem from "../../assets/publishing.png";
import { DefaultTool } from "../DefaultTool/DefaultTool";
import DefaultGrid from "../DefaultGrid/DefaultGrid";

import angle from "../../assets/angle.png";
import areaGraph from "../../assets/area-graph.png";
import atomic from "../../assets/atomic.png";
import attention from "../../assets/attention.png";
import battery from "../../assets/battery.png";
import binaryCode1 from "../../assets/binary-code (1).png";
import binaryCode from "../../assets/binary-code.png";
import binary from "../../assets/binary.png";
import bit from "../../assets/bit.png";
import bloodPressure from "../../assets/blood-pressure.png";
import calculator from "../../assets/calculator.png";
import clock from "../../assets/clock.png";
import coding1 from "../../assets/coding (1).png";
import coding2 from "../../assets/coding (2).png";
import colour from "../../assets/colour.png";
import convert1 from "../../assets/convert (1).png";
import convert2 from "../../assets/convert (2).png";
import convert from "../../assets/convert.png";
import cpm from "../../assets/cpm.png";
import cpu from "../../assets/cpu.png";
import crop1 from "../../assets/crop (1).png";
import crop from "../../assets/crop.png";
import css1 from "../../assets/css (1).png";
import css from "../../assets/css.png";
import csv from "../../assets/csv.png";
import curve from "../../assets/curve.png";
import dataContentStandards from "../../assets/data-content-standards.png";
import dataTransfer1 from "../../assets/data-transfer (1).png";
import dataTransfer from "../../assets/data-transfer.png";
import decimal1 from "../../assets/decimal (1).png";
import decimal2 from "../../assets/decimal (2).png";
import decimal from "../../assets/decimal.png";
import decode from "../../assets/decode.png";
import diagram from "../../assets/diagram.png";
import dice from "../../assets/dice.png";
import digitalization from "../../assets/digitalization.png";
import discount from "../../assets/discount.png";
import education from "../../assets/education.png";
import eggCarton from "../../assets/egg-carton.png";
import electricCurrent from "../../assets/electric-current.png";
import encryptedData from "../../assets/encrypted-data.png";
import energy from "../../assets/energy.png";
import exchangeRate from "../../assets/exchange-rate.png";
import facebook3 from "../../assets/facebook (3).png";
import fileFormat1 from "../../assets/file-format (1).png";
import fileFormat from "../../assets/file-format.png";
import fileType from "../../assets/file-type.png";
import file from "../../assets/file.png";
import finance from "../../assets/finance.png";
import flip from "../../assets/flip.png";
import folder from "../../assets/folder.png";
import folders from "../../assets/folders.png";
import font from "../../assets/font.png";
import frequency from "../../assets/frequency.png";
import hash from "../../assets/hash.png";
import hot from "../../assets/hot.png";
import html1 from "../../assets/html (1).png";
import html2 from "../../assets/html (2).png";
import htmlCode from "../../assets/html-code.png";
import html from "../../assets/html.png";
import icoFile from "../../assets/ico-file.png";
import illumination from "../../assets/illumination.png";
import imageFiles from "../../assets/image-files.png";
import instructions from "../../assets/instructions.png";
import ip1 from "../../assets/ip (1).png";
import ip from "../../assets/ip.png";
import javascript1 from "../../assets/javascript (1).png";
import javascript from "../../assets/javascript.png";
import jpgFile from "../../assets/jpg-file.png";
import jpgFormat from "../../assets/jpg-format.png";
import jsFile from "../../assets/js-file.png";
import jsonFile from "../../assets/json-file.png";
import json from "../../assets/json.png";
import lightBulb from "../../assets/light-bulb.png";
import link1 from "../../assets/link (1).png";
import link from "../../assets/link.png";
import marginal from "../../assets/marginal.png";
import mathematics from "../../assets/mathematics.png";
import measure from "../../assets/measure.png";
import measuringTape from "../../assets/measuring-tape.png";
import money from "../../assets/money.png";
import nlp from "../../assets/nlp.png";
import notes from "../../assets/notes.png";
import number8 from "../../assets/number-8.png";
import numberBlocks from "../../assets/number-blocks.png";
import numbers from "../../assets/numbers.png";
import padlock1 from "../../assets/padlock.png";
import paypal from "../../assets/paypal.png";
import picture from "../../assets/picture.png";
import png from "../../assets/png.png";
import population from "../../assets/population.png";
import powerTransformer from "../../assets/power-transformer.png";
import publishing from "../../assets/publishing.png";
import qrCode1 from "../../assets/qr-code.png";
import qr from "../../assets/qr.png";
import quick from "../../assets/quick.png";
import refresh from "../../assets/refresh.png";
import renewableEnergy1 from "../../assets/renewable-energy (1).png";
import renewableEnergy from "../../assets/renewable-energy.png";
import repeat from "../../assets/repeat.png";
import resizing from "../../assets/resizing.png";
import rgb from "../../assets/rgb.png";
import romanNumerals from "../../assets/roman-numerals.png";
import rotation from "../../assets/rotation.png";
import rubik from "../../assets/rubik.png";
import setting from "../../assets/setting.png";
import sigma from "../../assets/sigma.png";
import speedometer from "../../assets/speedometer.png";
import srt from "../../assets/srt.png";
import taxes from "../../assets/taxes.png";
import tester from "../../assets/tester.png";
import textMining1 from "../../assets/text-mining (1).png";
import textMining from "../../assets/text-mining.png";
import textToSpeech from "../../assets/text-to-speech.png";
import text from "../../assets/text.png";
import torqueWrench from "../../assets/torque-wrench.png";
import type_ from "../../assets/type.png";
import url_ from "../../assets/url.png";
import verification from "../../assets/verification.png";
import virtual from "../../assets/virtual.png";
import volumetrical from "../../assets/volumetrical.png";
import weightLoss from "../../assets/weight-loss.png";
import word from "../../assets/word.png";
import writer from "../../assets/writer.png";
import xml from "../../assets/xml.png";
import youtube from "../../assets/youtube.png";

export const Tools = () => {
  const imagesEditingTools = [
    icoFile,
    icoFile,
    imageFiles,
    file,
    flip,
    rotation,
    resizing,
    crop,
    resizing,
    convert,
    jpgFile,
    png,
    jpgFormat,
    resizing,
    textToSpeech,
  ];

  const imagesOnlineCalculators = [
    angle,
    areaGraph,
    atomic,
    attention,
    battery,
    binaryCode1,
    binaryCode,
    binary,
    bit,
    bloodPressure,
    calculator,
    clock,
  ];

  const imagesUnitConverter = [
    coding1,
    coding2,
    colour,
    convert1,
    convert2,
    cpm,
    cpu,
    crop1,
    css1,
    css,
    csv,
    curve,
    dataContentStandards,
    dataTransfer,
    dataTransfer1,
    decimal,
    decimal1,
    decimal2,
    decode,
    diagram,
    dice,
    digitalization,
    discount,
    education,
    eggCarton,
    electricCurrent,
    encryptedData,
    energy,
    exchangeRate,
    facebook3,
  ];

  const imagesBinaryConverter = [
    fileFormat,
    fileFormat1,
    fileType,
    finance,
    folder,
    folders,
    font,
    frequency,
    hash,
    hot,
    html1,
    html2,
    htmlCode,
    html,
    illumination,
    instructions,
    ip1,
    ip,
    javascript,
    javascript1,
    jsFile,
    jsonFile,
    json,
    lightBulb,
  ];

  const imagesWebsiteManagement = [
    link1,
    link,
    marginal,
    mathematics,
    measure,
    measuringTape,
    money,
    nlp,
    notes,
    number8,
    numberBlocks,
    numbers,
    padlock1,
    paypal,
    picture,
  ];

  const imagesDevelopment = [
    population,
    powerTransformer,
    publishing,
    qrCode1,
    qr,
    quick,
    refresh,
    renewableEnergy,
    renewableEnergy1,
    repeat,
    rgb,
    romanNumerals,
  ];

  const imagesOtherTools = [
    rubik,
    setting,
    sigma,
    speedometer,
    srt,
    taxes,
    tester,
    textMining1,
    textMining,
    text,
    type_,
    torqueWrench,
  ];

  return (
    <div className="tools-container">
      <DefaultTool
        title="AnyTool"
        description="The Best Free Online Web Tools You Will Ever Need"
      ></DefaultTool>
      <div className="search-bar">
        <input type="text" placeholder="Search for your tool..." />
        <button type="submit"></button>
      </div>
      <div className="tools-grids">
        <DefaultGrid
          title="Text Content Tools"
          description="A complete set of text tools is now at your fingertips. Create dummy
            text, count words, or change the text case."
          links={[
            "/tools/text-to-slug",
            "/tools/lorem-ipsum-generator",
            "/tools/case-converter",
            "/tools/word-counter",
            "/tools/remove-line-breaks",
            "/tools/random-word-generator",
          ]}
          images={[TextToSlug, lorem, textCap, counter, lineBreak, gachapon]}
          itemName={[
            "Text To Slug",
            "Lorem Ipsum Generator",
            "Case Converter",
            "Word Counter",
            "Remove Line Breaks",
            "Random Word Generator",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Images Editing Tools"
          description="Create a favicon, compress or resize a picture with a single click. All essentials for image editing are available in one place."
          links={[
            "/tools/ico-to-png",
            "/tools/ico-converter",
            "/tools/image-to-base64",
            "/tools/base64-to-image",
            "/tools/flip-image",
            "/tools/rotate-image",
            "/tools/image-enlarger",
            "/tools/image-cropper",
            "/tools/image-resizer",
            "/tools/image-converter",
            "/tools/jpg-to-png",
            "/tools/png-to-jpg",
            "/tools/jpg-converter",
            "/tools/webp-to-jpg",
            "/tools/text-to-speech",
          ]}
          images={imagesEditingTools}
          itemName={[
            "ICO to PNG",
            "ICO Converter",
            "Image to Base64",
            "Base64 to Image",
            "Flip Image",
            "Rotate Image",
            "Image Enlarger",
            "Image Cropper",
            "Image Resizer",
            "Image Converter",
            "JPG to PNG",
            "PNG to JPG",
            "JPG Converter",
            "WebP to JPG",
            "Text To Speech",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Online Calculators"
          description="Use this basic calculator online with an extensive collection of calculators on math, finance, fitness, and more."
          links={[
            "/tools/age-calculator",
            "/tools/percentage-calculator",
            "/tools/average-calculator",
            "/tools/confidence-interval-calculator",
            "/tools/sales-tax-calculator",
            "/tools/margin-calculator",
            "/tools/probability-calculator",
            "/tools/paypal-fee-calculator",
            "/tools/discount-calculator",
            "/tools/cpm-calculator",
            "/tools/loan-calculator",
            "/tools/gst-calculator",
          ]}
          images={imagesOnlineCalculators}
          itemName={[
            "Age Calculator",
            "Percentage Calculator",
            "Average Calculator",
            "Confidence Interval Calculator",
            "Sales Tax Calculator",
            "Margin Calculator",
            "Probability Calculator",
            "Paypal Fee Calculator",
            "Discount Calculator",
            "CPM Calculator",
            "Loan Calculator",
            "GST Calculator",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Unit Converter Tools"
          description="Access our most popular converters below to quickly convert currency rates, temperature, area, and more."
          links={[
            "/tools/length-converter",
            "/tools/area-converter",
            "/tools/weight-converter",
            "/tools/volume-converter",
            "/tools/temperature-converter",
            "/tools/each-converter",
            "/tools/time-converter",
            "/tools/digital-converter",
            "/tools/parts-per-converter",
            "/tools/speed-converter",
            "/tools/pace-converter",
            "/tools/pressure-converter",
            "/tools/current-converter",
            "/tools/voltage-converter",
            "/tools/power-converter",
            "/tools/reactive-power-converter",
            "/tools/apparent-power-converter",
            "/tools/energy-converter",
            "/tools/reactive-energy-converter",
            "/tools/volumetric-flow-rate-converter",
            "/tools/illuminance-converter",
            "/tools/frequency-converter",
            "/tools/angle-converter",
            "/tools/currency-converter",
            "/tools/number-to-word-converter",
            "/tools/word-to-number-converter",
            "/tools/torque-converter",
            "/tools/charge-converter",
            "/tools/number-to-roman-numerals",
            "/tools/roman-numerals-to-number",
          ]}
          images={imagesUnitConverter}
          itemName={[
            "Length Converter",
            "Area Converter",
            "Weight Converter",
            "Volume Converter",
            "Temperature Converter",
            "Each Converter",
            "Time Converter",
            "Digital Converter",
            "Parts Per Converter",
            "Speed Converter",
            "Pace Converter",
            "Pressure Converter",
            "Current Converter",
            "Voltage Converter",
            "Power Converter",
            "Reactive Power Converter",
            "Apparent Power Converter",
            "Energy Converter",
            "Reactive Energy Converter",
            "Volumetric Flow Rate Converter",
            "Illuminance Converter",
            "Frequency Converter",
            "Angle Converter",
            "Currency Converter",
            "Number to Word Converter",
            "Word to Number Converter",
            "Torque Converter",
            "Charge Converter",
            "Number to Roman Numerals",
            "Roman Numerals to Number",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Binary Converter Tools"
          description="A collection of useful utilities for working with binary values."
          links={[
            "/tools/text-to-binary",
            "/tools/binary-to-text",
            "/tools/hex-to-binary",
            "/tools/binary-to-hex",
            "/tools/ascii-to-binary",
            "/tools/binary-to-ascii",
            "/tools/decimal-to-binary",
            "/tools/binary-to-decimal",
            "/tools/text-to-ascii",
            "/tools/ascii-to-text",
            "/tools/hex-to-decimal",
            "/tools/decimal-to-hex",
            "/tools/octal-to-binary",
            "/tools/binary-to-octal",
            "/tools/octal-to-decimal",
            "/tools/decimal-to-octal",
            "/tools/hex-to-octal",
            "/tools/octal-to-hex",
            "/tools/text-to-octal",
            "/tools/octal-to-text",
            "/tools/text-to-hex",
            "/tools/hex-to-text",
            "/tools/text-to-decimal",
            "/tools/decimal-to-text",
          ]}
          images={imagesBinaryConverter}
          itemName={[
            "Text to Binary",
            "Binary to Text",
            "HEX to Binary",
            "Binary to HEX",
            "ASCII to Binary",
            "Binary to ASCII",
            "Decimal to Binary",
            "Binary to Decimal",
            "Text to ASCII",
            "ASCII to Text",
            "HEX to Decimal",
            "Decimal to HEX",
            "Octal to Binary",
            "Binary to Octal",
            "Octal to Decimal",
            "Decimal to Octal",
            "HEX to Octal",
            "Octal to HEX",
            "Text to Octal",
            "Octal to Text",
            "Text to HEX",
            "HEX to Text",
            "Text to Decimal",
            "Decimal to Text",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Website Management Tools"
          description="If you struggle to get more traffic and enhance your website performance, use these website management tools."
          links={[
            "/tools/html-decode",
            "/tools/html-encoder",
            "/tools/url-decode",
            "/tools/url-encoder",
            "/tools/html-beautifier",
            "/tools/html-minifier",
            "/tools/css-beautifier",
            "/tools/css-minifier",
            "/tools/js-beautifier",
            "/tools/js-minifier",
            "/tools/js-deobfuscator",
            "/tools/js-obfuscator",
            "/tools/qr-code-decoder",
            "/tools/qr-code-generator",
            "/tools/find-facebook-id",
          ]}
          images={imagesWebsiteManagement}
          itemName={[
            "HTML Decode",
            "HTML Encoder",
            "URL Decode",
            "URL Encoder",
            "HTML Beautifier",
            "HTML Minifier",
            "CSS Beautifier",
            "CSS Minifier",
            "JavaScript Beautifier",
            "JavaScript Minifier",
            "Javascript DeObfuscator Online",
            "Javascript Obfuscator Online",
            "QR Code Decoder",
            "QR Code Generator",
            "Find Facebook ID Online",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Development Tools"
          description="A collection of useful online tools to clean up your JSON, remove whitespace, formatting, and more."
          links={[
            "/tools/json-viewer",
            "/tools/json-formatter",
            "/tools/json-validator",
            "/tools/json-editor",
            "/tools/json-minify",
            "/tools/xml-to-json-converter",
            "/tools/csv-to-json-converter",
            "/tools/tsv-to-json-converter",
            "/tools/json-to-xml-converter",
            "/tools/json-to-csv-converter",
            "/tools/json-to-text-converter",
            "/tools/json-to-tsv-converter",
          ]}
          images={imagesDevelopment}
          itemName={[
            "JSON Viewer Online",
            "JSON Formatter Online",
            "JSON Validator Online",
            "JSON Editor Online",
            "JSON Minify Online",
            "XML to JSON Converter",
            "CSV to JSON Converter Online",
            "TSV to JSON Converter",
            "JSON to XML Converter",
            "JSON to CSV Converter",
            "JSON to Text Converter",
            "JSON to TSV Converter",
          ]}
        ></DefaultGrid>
        <DefaultGrid
          title="Other Tools"
          description="Other useful tools that will help you in your daily online activities."
          links={[
            "/tools/md5-generator",
            "/tools/what-is-my-ip",
            "/tools/ip-address-lookup",
            "/tools/base64-decoder",
            "/tools/base64-encoder",
            "/tools/color-converter",
            "/tools/password-generator",
            "/tools/vtt-to-srt-converter",
            "/tools/srt-to-vtt",
            "/tools/youtube-thumbnail-downloader",
            "/tools/hex-to-rgb-converter",
            "/tools/rgb-to-hex",
          ]}
          images={imagesOtherTools}
          itemName={[
            "MD5 Generator Online",
            "What Is My IP",
            "IP Address Lookup Online",
            "Base64 Decoder Online",
            "Base64 Encoder Online",
            "Color Converter Online",
            "Online Password Generator",
            "VTT to SRT Converter Online",
            "SRT to VTT",
            "YouTube Thumbnail Downloader",
            "HEX to RGB Converter",
            "RGB to HEX",
          ]}
        ></DefaultGrid>
      </div>
      <br />
      <br />
      <br />
      <Footer></Footer>
    </div>
  );
};
