import React from "react";
import { Frame11 } from "../components/assests/OverlayEmployment/Frame11";
import { Frame41223 } from "./Frame41223";
import { Frame48095970 } from "./Frame48095970";
import { IconComponentNode } from "./IconComponentNode";
import { Line35 } from "./Line35";
import "./style.css";

export const OverlayEmployment = () => {
  return (
    <div className="overlay-employment">
      <div className="div">
        <Frame48095970 className="frame" />
        <Frame48095970 className="frame-48095970" />
        <Frame48095970 className="frame-48095969" />
        <Frame48095970 className="frame-48095971" />
        <Frame48095970 className="frame-48095856" />
        <Frame48095970 className="frame-48095970-instance" />
        <Frame48095970 className="frame-48095969-instance" />
        <div className="frame-wrapper">
          <div className="div-wrapper">
            <div className="div-wrapper">
              <p className="postuler-en-ligne">
                <span className="text-wrapper">Postuler </span>
                <span className="span">en ligne</span>
              </p>
            </div>
          </div>
        </div>
        <Frame41223 className="frame-41223" />
        <div className="frame-2">
          <div className="frame-3">
            <div className="group">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="group-2">
                    <div className="heading-example-wrapper">
                      <div className="heading-example">PRÉNOM*</div>
                    </div>
                  </div>
                  <div className="text-wrapper-2">Entrer votre prénom</div>
                </div>
              </div>
              <Line35 className="line" />
            </div>
            <div className="group">
              <div className="frame-4">
                <div className="frame-5">
                  <div className="group-3">
                    <div className="heading-example-wrapper">
                      <div className="heading-example">NOM*</div>
                    </div>
                  </div>
                  <div className="text-wrapper-2">Entrer votre nom</div>
                </div>
              </div>
              <Line35 className="line" />
            </div>
            <div className="frame-6">
              <div className="frame-7">
                <div className="group-4">
                  <div className="heading-example-wrapper">
                    <div className="heading-example">NUMÉRO DE TÉLÉPHONE*</div>
                  </div>
                </div>
                <p className="p">Entrer votre numéro de téléphone</p>
              </div>
              <Line35 className="line-35" />
            </div>
            <div className="frame-8">
              <div className="group-5">
                <div className="heading-example-wrapper">
                  <div className="heading-example">CURRICULUM VITAE*</div>
                </div>
              </div>
              <div className="frame-9">
                <div className="frame-10">
                  <div className="frame-11">
                    <div className="frame-12">
                      <div className="text-wrapper-3">IMPORTER VOTRE CV (PDF)</div>
                    </div>
                  </div>
                  <Frame11 className="frame-11-instance" />
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="group-6">
                <div className="heading-example-wrapper">
                  <div className="heading-example">MESSAGE</div>
                </div>
              </div>
              <div className="frame-13">
                <div className="text-wrapper-4">Entrer votre message</div>
              </div>
            </div>
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <div className="text-wrapper-3">ENVOYER MA CANDIDATURE</div>
                </div>
              </div>
              <IconComponentNode className="frame-11-instance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};