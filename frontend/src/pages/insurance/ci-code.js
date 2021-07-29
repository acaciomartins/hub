import React, { useState } from "react";
import LayoutForm from "../../components/insurance/layoutForm";
import WhiteButton from "../../components/insurance/whiteButton";

function CiCode() {

    return (
        <LayoutForm>
            {/*<div className="mt-5 mb-4 mx-5 ">*/}
                <p className="form-title">conte aí pra gente, é você que irá dirigir o veículo?</p>
            <div className="bottom-buttons">
                <WhiteButton label="Sim, sou eu que vou dirgir" />
                <WhiteButton label="Não, outra pessoa que irá" />
            </div>
            {/*</div>*/}
        </LayoutForm>
    );
}


export default CiCode
