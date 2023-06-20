import { Content } from "../components/Content/Content";
import { NavBar } from "../components/NavBar/NavBar";
import { Landing } from "../components/Landing/Landing";
import { ImageGenerator } from "../components/ImageGenerator/ImageGenerator";
import DownloadImage from "../components/DownloadImage/DownloadImage";
import { Tools } from "../components/ToolItems/Tools";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Register } from "../components/Register/Register";
import ChosenTool from "../components/SingleTools/ChosenTool/ChosenTool";
import IcoToPng from "../components/SingleTools/IcoToPng/IcoToPng";
import AgeCalculator from "../components/SingleTools/AgeCalculator/AgeCalculator";
import PercentageCalculator from "../components/SingleTools/PercentageCalculator/PercentageCalculator";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import DiscountCalculator from "../components/SingleTools/DiscountCalculator/DiscountCalculator";
import { WordCounter } from "../components/SingleTools/WordCounter/WordCounter";
import { CaseConverter } from "../components/SingleTools/CaseConverter/CaseConverter";
import RandomWordGenerator from "../components/SingleTools/RandomWordGenerator/RandomWordGenerator";
import RemoveLineBreaks from "../components/SingleTools/RemoveLineBreaks/RemoveLineBreaks";
import { LoremIpsumGenerator } from "../components/SingleTools/LoremIpsumGenerator/LoremIpsumGenerator";
import { LoanCalculator } from "../components/SingleTools/LoanCalculator/LoanCalculator";
import { GstCalculator } from "../components/SingleTools/GstCalculator/GstCalculator";
import { ProbabilityCalculator } from "../components/SingleTools/ProbabilityCalculator/ProbabilityCalculator";
import { SalesTaxCalculator } from "../components/SingleTools/SalesTaxCalculator/SalesTaxCalculator";

const routes = (
  <Routes>
    <Route exact path="/" element={<Landing />}></Route>
    <Route exact path="/tools" element={<Tools />}></Route>
    <Route exact path="/about" element={<About />}></Route>
    <Route exact path="/contact" element={<Contact />}></Route>
    <Route exact path="/register" element={<Register />}></Route>
    <Route exact path="/tools/text-to-slug" element={<ChosenTool />}></Route>
    <Route exact path="/tools/ico-to-png" element={<IcoToPng />}></Route>
    <Route exact path="/tools/word-counter" element={<WordCounter />}></Route>
    <Route
      exact
      path="/tools/probability-calculator"
      element={<ProbabilityCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/sales-tax-calculator"
      element={<SalesTaxCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/gst-calculator"
      element={<GstCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/loan-calculator"
      element={<LoanCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/discount-calculator"
      element={<DiscountCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/percentage-calculator"
      element={<PercentageCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/age-calculator"
      element={<AgeCalculator />}
    ></Route>
    <Route
      exact
      path="/tools/lorem-ipsum-generator"
      element={<LoremIpsumGenerator />}
    ></Route>
    <Route
      exact
      path="/tools/remove-line-breaks"
      element={<RemoveLineBreaks />}
    ></Route>
    <Route
      exact
      path="/tools/random-word-generator"
      element={<RandomWordGenerator />}
    ></Route>
    <Route
      exact
      path="/tools/case-converter"
      element={<CaseConverter />}
    ></Route>
  </Routes>
);

export default routes;
