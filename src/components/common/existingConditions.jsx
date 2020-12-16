import React, { Component } from "react";

class ExistingConditions extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 id="pre-existing-conditions">
          Pre-existing medical conditions (comorbidities)
        </h2>
        <p>
          {" "}
          Patients who reported no pre-existing ("comorbid") medical conditions
          had a case fatality rate of 0.9%. Pre-existing illnesses that put
          patients at higher risk of dying from a COVID-19 infection are:
        </p>
        <h4>COVID-19 Fatality Rate by COMORBIDITY:</h4>
        <p>
          *<strong>Death Rat</strong>e = (number of deaths / number of cases) ={" "}
          <strong>probability of dying if infected by the virus</strong> (%).
          This probability differs depending on pre-existing condition. The
          percentage shown below does{" "}
          <strong>
            NOT represent in any way the share of deaths by pre-existing
            condition
          </strong>
          . Rather, it represents, for a patient with a given pre-existing
          condition, the <strong>risk of dying</strong> if infected by COVID-19.
        </p>
        <div class="table-responsive">
          <table class="table table-hover table-bordered table-condensed table-list">
            <tbody>
              <tr bgcolor="#FCF8F8" class="scrollable bordered">
                <td height="33">
                  <div align="left">PRE-EXISTING CONDITION</div>
                </td>
                <td>
                  DEATH RATE
                  <br />
                  confirmed cases <br />
                </td>
                <td>
                  DEATH RATE
                  <br />
                  all cases
                </td>
              </tr>
              <tr class="scrollable bordered">
                <td width="252">
                  <div align="left">
                    <strong>
                      <span class="story-body__list-item">
                        Cardiovascular disease
                      </span>
                    </strong>
                  </div>
                </td>
                <td width="141">
                  <div align="right">
                    <strong>13.2%</strong>
                  </div>
                </td>
                <td width="122">
                  <div align="right">
                    <strong>10.5%</strong>
                  </div>
                </td>
              </tr>
              <tr class="scrollable bordered">
                <td>
                  <div align="left">
                    <strong>
                      <span class="story-body__list-item">Diabetes</span>
                    </strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>9.2%</strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>7.3%</strong>
                  </div>
                </td>
              </tr>
              <tr class="scrollable bordered">
                <td>
                  <div align="left">
                    <span class="story-body__list-item">
                      <strong>Chronic respiratory disease</strong>
                    </span>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>8.0%</strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>6.3%</strong>
                  </div>
                </td>
              </tr>
              <tr class="scrollable bordered">
                <td>
                  <div align="left">
                    <strong>
                      <span class="story-body__list-item">Hypertension</span>
                    </strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>8.4%</strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>6.0%</strong>
                  </div>
                </td>
              </tr>
              <tr class="scrollable bordered">
                <td>
                  <div align="left">
                    <strong>Cancer</strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>7.6%</strong>
                  </div>
                </td>
                <td>
                  <div align="right">
                    <strong>5.6%</strong>
                  </div>
                </td>
              </tr>
              <tr bgcolor="#F9F9F9" class="scrollable bordered">
                <td>
                  <div align="left">
                    <strong>
                      <em>no pre-existing conditions </em>
                    </strong>
                  </div>
                </td>
                <td>
                  <div align="right"></div>
                </td>
                <td>
                  <div align="right">
                    <strong>0.9%</strong>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            *<strong>Death Rate</strong> = (number of deaths / number of cases)
            = <strong>probability of dying if infected by the virus</strong>{" "}
            (%). The percentages{" "}
            <span class="style1"> do not have to add up to 100%</span>, as they
            <strong> do NOT represent share of deaths by condition. </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default ExistingConditions;
