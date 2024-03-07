import React from "react";
// import styles from "./Component.module.css";
// import "./styles.css";

export default function Component() {
    return (
        <div className="main">
            <div className="row"> 
                <div className="col-6 payment-main">
                    <div className="payment mt-4">
                        <h1>$114,418</h1>
                        <h3> &nbsp;per month</h3>
                    </div>
                    <div className="subtitle">
                        <p>30 Year Fixed. 3.525% Interest Rate.</p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="details">
                        <p>Principal + Interest: <span>$88,286</span> </p>
                        <p>Monthly Payment: <span>$114,418</span> </p>
                        <p>Monthly Tax: <span>$20,416</span> </p>
                        <p>Monthly Insurance: <span>$5,716</span> </p>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3">
                    <label for="term" class="form-label">
                        Term
                    </label>
                    <div class="input-group input-group-lg">
                        <input
                            type="text"
                            class="form-control"
                            id="term"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                        <span class="input-group-text" id="inputGroup-sizing-lg">
                            yrs
                        </span>
                    </div>
                </div>
                <div className="col-3">
                    <label for="term" class="form-label">
                        Interest Rate
                    </label>
                    <div class="input-group input-group-lg">
                        <input
                            type="text"
                            class="form-control"
                            id="term"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                        <span class="input-group-text" id="inputGroup-sizing-lg">
                            %
                        </span>
                    </div>
                </div>
                <div className="col-3">
                    <label for="term" class="form-label">
                        Down Payment
                    </label>
                    <div class="input-group input-group-lg">
                        <span class="input-group-text" id="inputGroup-sizing-lg">
                            $
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            id="term"
                            aria-describedby="inputGroup-sizing-lg"
                        />
                    </div>
                </div>
                <div className="col-3">
                    <label for="term" class="form-label">
                        List Price
                    </label>
                    <div class="input-group input-group-lg">
                        <span class="input-group-text" id="inputGroup-sizing-lg">
                            $
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            id="term"
                            aria-describedby="inputGroup-sizing-lg"
                        />

                    </div>
                </div>
            </div>
            <p className="text">
                Based on a fully amortized fixed rate loan. Ask your agent for the tax rates in your area. Insurance estimate is based on an average cost, your final premium cost will be determined by the type of coverage you select. This program only provides an estimate.
            </p>
        </div>
    );
}
