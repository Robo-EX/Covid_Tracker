import React from "react";
import { NavLink } from "react-router-dom";

const Symptoms = () => {
  return (
    <div>
      <h1 id="page-top" className="my-2">
        Coronavirus Symptoms (COVID-19){" "}
      </h1>
      <div>
        <p>
          <em>
            Last updated: November 24, 2:00 GMT - We will continue to update and
            improve this page as we gather new information and details.{" "}
          </em>
        </p>
      </div>
      <blockquote>
        <p>
          People with COVID-19 have had a wide range of symptoms reported –
          ranging from mild symptoms to severe illness. These symptoms may
          appear 2-14 days after exposure to the virus:
        </p>
        <ul>
          <li>
            <strong>Fever</strong>
          </li>
          <li>
            <strong>Cough</strong>
          </li>
          <li>
            <strong>Shortness of breath or difficulty breathing</strong>
          </li>
          <li>
            <strong>Chills</strong>
          </li>
          <li>
            <strong>Repeated shaking with chills</strong>
          </li>
          <li>
            <strong>Body aches</strong>
          </li>
          <li>
            <strong>Headache</strong>
          </li>
          <li>
            <strong>Sore throat</strong>
          </li>
          <li>
            <strong>New loss of taste or smell</strong>
          </li>
        </ul>
      </blockquote>
      <cite>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
          Symptoms of Coronavirus (COVID-19)
        </a>{" "}
        - United States Centers for Disease Control and Prevention (CDC)
        <sup>
          [<a href="#ref-1">1</a>]
        </sup>{" "}
      </cite>
      <div className="spaced my-2">
        <strong>Content:</strong>
        <ul>
          <li>
            <strong>
              <a href="#typical">Typical Symptoms</a>
            </strong>
          </li>
          <li>
            <strong>
              <a href="#mild">80% of cases are mild </a>
            </strong>
          </li>
          <li>
            <strong>
              <a href="#pre">Pre-existing conditions</a>
            </strong>
          </li>
          <li>
            <strong>
              <a href="#examples">Examples</a>
            </strong>
            <a href="#examples"> of possible development of symptoms</a>
          </li>
          <li>
            <strong>
              <a href="#duration">How long do symptoms last? </a>
            </strong>
            <a href="#duration">(duration from onset to recovery) </a>
          </li>
          <li>
            <strong>
              <a href="#hospitalized">
                Symptoms observed in hospitalized patients
              </a>
            </strong>
          </li>
          <li>
            <a href="#info">
              Information on Coronavirus Symptoms from Government Health
              Officials{" "}
            </a>
          </li>
        </ul>
      </div>
      <h2 id="typical">Typical Symptoms</h2>
      <p>
        COVID-19 typically causes flu-like symptoms including a fever and cough.{" "}
      </p>
      <p>
        In some patients - particularly the elderly and others with other
        chronic health conditions - these symptoms can develop into pneumonia,
        with chest tightness, chest pain, and shortness of breath.
      </p>
      <p>
        {" "}
        It seems to <strong>start with a fever</strong>,{" "}
        <strong>followed by a dry cough</strong>.
      </p>
      <p>
        <strong>After a week, it can lead to shortness of breath,</strong> with
        about 20% of patients requiring hospital treatment.
        <br />
        <br />
        Notably, the COVID-19 infection
        <strong> rarely seems to cause a runny nose</strong>, sneezing, or sore
        throat (these symptoms have been observed in only about 5% of patients).{" "}
        <strong>
          Sore throat, sneezing, and stuffy nose are most often signs of a cold
        </strong>
        .
      </p>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h2 id="mild">80% of cases are mild </h2>
      <p>
        Based on all 72,314 cases of COVID-19 confirmed, suspected, and
        asymptomatic cases in China as of February 11, a paper by the Chinese
        CCDC released on February 17 and published in the Chinese Journal of
        Epidemiology has found that:
      </p>
      <ul className="story-body__unordered-list">
        <li className="story-body__list-item">
          <strong>80.9% of infections are mild</strong> (with flu-like symptoms)
          and <strong>can recover at home</strong>.
        </li>
        <li className="story-body__list-item">
          <strong>13.8% are severe</strong>, developing severe diseases
          including <strong>pneumonia </strong>and{" "}
          <strong>shortness of breath</strong>.
        </li>
        <li className="story-body__list-item">
          {" "}
          <strong>4.7% as critical </strong>and can include:{" "}
          <strong>respiratory failure</strong>, <strong>septic shock</strong>,
          and <strong>multi-organ failure</strong>.
        </li>
        <li className="story-body__list-item">
          in about 2% of reported cases the virus is fatal.
        </li>
        <li className="story-body__list-item">
          {" "}
          Risk of death increases the older you are.
        </li>
        <li className="story-body__list-item">
          Relatively few cases are seen among children.
        </li>
      </ul>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h2 id="pre">Pre-existing conditions</h2>
      <br />
      <p>
        <em>
          See also:{" "}
          <NavLink to="/existingConditions">
            <strong>Death Rates by Existing Conditions </strong>
          </NavLink>
        </em>
      </p>
      <p>
        <span className="story-body__list-item">
          Pre-existing illnesses that put patients at higher risk:{" "}
        </span>
      </p>
      <ol>
        <li>
          <span className="story-body__list-item">cardiovascular disease</span>
        </li>
        <li>
          <span className="story-body__list-item">diabetes</span>
        </li>
        <li>
          <span className="story-body__list-item">
            chronic respiratory disease
          </span>
        </li>
        <li>
          <span className="story-body__list-item">hypertension</span>
        </li>
      </ol>
      <p>
        That said, some otherwise healthy people do seem to develop a severe
        form of pneumonia after being infected by the virus. The reason for this
        is being investigated as we try to learn more about this new virus.
      </p>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h2 id="examples">
        Examples of possible development of symptoms (from actual cases){" "}
      </h2>
      <p>A man in his 40s in Japan:</p>
      <ul>
        <li>
          <strong>
            Day #1: <strong></strong>
          </strong>
          <strong></strong>
          <strong>malaise and muscle pain</strong>
        </li>
        <li> later diagnosed with pneumonia</li>
      </ul>
      <p>A man in his 60s in Japan:</p>
      <ul>
        <li>
          <strong>
            Day #1: <strong></strong>
          </strong>
          <strong></strong>initial symptoms of{" "}
          <strong>low-grade fever and sore throat</strong>.
        </li>
      </ul>
      <p>A man in his 40s in Japan:</p>
      <ul>
        <li>
          <strong>
            Day #1: <strong></strong>
          </strong>
          <strong>chills</strong>, <strong>sweating</strong> and{" "}
          <strong>malaise</strong>
        </li>
        <li>
          <strong>
            Day #4: <strong></strong>
          </strong>
          <strong>fever</strong>, <strong>body ache</strong> and{" "}
          <strong>cough</strong>
        </li>
      </ul>
      <p>A woman in her 70s, in Japan:</p>
      <ul>
        <li>
          <strong>
            Day #1: <strong></strong>
          </strong>
          <strong>38° fever for a few minutes</strong>
        </li>
        <li>
          <strong>Day #2-3: </strong>went on a bus tour
        </li>
        <li>
          <strong>Day #5: visited a medical institution</strong>
        </li>
        <li>
          <strong>Day #6: showed symptoms of pneumonia</strong>.{" "}
        </li>
      </ul>
      <p>A woman in her 40s, in Japan:</p>
      <ul>
        <li>
          <strong>
            Day #1: <strong></strong>low-grade fever
          </strong>{" "}
        </li>
        <li>
          {" "}
          Day #2: 38<strong>°</strong> fever
        </li>
        <li>
          {" "}
          Day #6: being <strong>treated at home</strong>.
        </li>
      </ul>
      <p>A man in his 60s, in Japan: </p>
      <ul>
        <li>
          Day #1: <strong>Cold</strong>
        </li>
        <li>
          Day #6: <strong>Fever of 39° C.</strong> (102.2 F){" "}
        </li>
        <li>
          Day #8: <strong>Pneumonia</strong>
        </li>
      </ul>
      <p>
        Another patient, in China with a history of type 2 diabetes and
        hypertension:
      </p>
      <ul>
        <li>
          <strong>Jan. 22: Fever and cough</strong>
        </li>
        <li>Feb. 5: Died </li>
      </ul>
      <p>
        First death in the Philippines (a 44-year-old Chinese thought to have
        had other pre-existing health conditions):
      </p>
      <ul>
        <li>
          Jan. 25:{" "}
          <strong>Fever, cough, and sore throat (hospitalized) </strong>
        </li>
        <li>
          Developed <strong>severe pneumonia</strong>
        </li>
        <li>Feb. 2: Died</li>
      </ul>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h2 id="hospitalized">&nbsp;</h2>
      <h2 id="duration">How long do symptoms last?</h2>
      <p>
        Using available preliminary data, the Report of the WHO-China Joint
        Mission published on Feb. 28 by WHO,{" "}
        <sup>
          [<a href="#ref-5">5</a>]
        </sup>{" "}
        which is based on 55,924 laboratory confirmed cases, observed the
        following median time from symptoms onset to clinical recovery:
      </p>
      <ul>
        <li>
          <strong>mild cases</strong>: approximately <strong>2 weeks</strong>
        </li>
        <li>
          <strong>severe or critical</strong> disease:
          <strong> 3 - 6 weeks</strong>{" "}
        </li>
        <li>
          time from onset to the development of severe disease (including
          hypoxia):<strong> 1 week</strong>
        </li>
      </ul>
      <p>
        Among patients who have died, the time from symptom onset to outcome
        ranges from 2 - 8 weeks.
      </p>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h2>Symptoms observed in hospitalized patients with COVID-19</h2>
      Below we list the symptoms, with{" "}
      <strong>
        percentages representing the proportion of patients displaying that
        symptom
      </strong>
      , as observed in hospitalized patients tested and identified as having
      laboratory-confirmed COVID-19 infection. These findings refer to{" "}
      <strong>hospitalized patients</strong>, therefore generally representing{" "}
      <strong>serious</strong> or critical cases. The{" "}
      <strong>majority of cases of COVID-19 (about 80%) is mild</strong>
      <br />
      <br />
      <h3>
        Findings from the Wang et al study published on JAMA and based on 138
        hospitalized patients{" "}
        <sup>
          [<a href="#ref-2">2</a>]
        </sup>
      </h3>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-condensed table-list">
          <thead>
            <tr bgcolor="#FCF8F8">
              <td height="35" colspan="2">
                <div align="left">
                  <strong>Common symptoms included: </strong>
                  <br />
                  (Wang et al study){" "}
                  <sup>
                    [<a href="#ref-2">2</a>]
                  </sup>
                </div>
                <div align="right"></div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="scrollable bordered">
              <td width="287">
                <div align="left">
                  <strong>Fever</strong>
                </div>
              </td>
              <td width="82">
                <div align="right">98.6%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Fatigue</strong>
                </div>
              </td>
              <td>
                <div align="right">69.6%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Dry cough</strong>
                </div>
              </td>
              <td>
                <div align="right">59.4%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span>The median time observed:</span>
      </p>
      <ul>
        <li>
          <span>
            from <strong>first symptom</strong> to → <strong>Dyspnea</strong>{" "}
            (Shortness of breath) = <strong>5.0 days</strong>
          </span>
        </li>
        <li>
          <span>
            <span>
              from <strong>first symptom</strong>
            </span>{" "}
            to <span>→ </span> <strong>Hospital admission</strong> ={" "}
            <strong>7.0 days</strong>
          </span>
        </li>
        <li>
          <span>
            {" "}
            <span>
              <span>
                from <strong>first symptom</strong>
              </span>{" "}
              to <span>→ </span> <strong>ARDS </strong>(Acute Respiratory
              Distress Syndrome) ={" "}
            </span>{" "}
            <strong>8.0 days </strong>(when occurring){" "}
          </span>
        </li>
      </ul>
      <br />
      <h4>Full list of symptoms from the Wang study:</h4>
      <p>
        <a href="https://cdn.jamanetwork.com/ama/content_public/journal/jama/0/joi200019t1.png?Expires=2147483647&amp;Signature=4jEMKsjXWq9Rcb00mqybI%7Em1SBaHcTctOrnX0G3mfcYgq3CCb92okz615oRaUjY%7EkheCb9uOnG9TGPeHAo5KkM9%7EiI1529XMOvSn8gzSuuQNmrxuEdoeTewvBGKO-GdPaAzDxP7pfV2YobrsO5n0cursAXfputThZDoiJr3AsoB1OjnoFEz-ToR9WCSZ7p-3tf1HaMDdl-Cbd2kex6TXq13FaQ4g4-XavGt5cYr14dehLgbYsp9406A5JT6UPzquyM9CZqQe-wgXknTmtCeo2xSHk8L3EqZ31dqvfkk1v3CXfVvLzHDVjvb6whzGF%7EUkr6qyZJDVSuX0qeNyB31dGQ__&amp;Key-Pair-Id=APKAIE5G5CRDK6RD3PGA">
          <img
            src={require("./img/coronavirus--symptoms-table-wang-jama-02072020-reduced.png")}
            width="800"
            height="620"
            border="0"
            className="img-responsive"
          />
        </a>
        <br />
        <span className="style1">
          From:{" "}
          <a href="https://jamanetwork.com/journals/jama/fullarticle/2761044?guestAccessKey=f61bd430-07d8-4b86-a749-bec05bfffb65">
            Clinical Characteristics of 138 Hospitalized Patients With 2019
            Novel Coronavirus–Infected Pneumonia in Wuhan, China
          </a>{" "}
          - JAMA, Wang et al., February 7, 2020
        </span>
      </p>
      <br />
      <h3>
        Findings from the Huang et al study published on The Lancet and based on
        41 hospitalized patients{" "}
        <sup>
          [<a href="#ref-3">3</a>]
        </sup>
      </h3>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-condensed table-list">
          <thead>
            <tr bgcolor="#FCF8F8">
              <td height="35" colspan="2">
                <div align="left">
                  COMMON SYMPTOMS <br />
                  AT ONSET OF ILLNESS <br />
                  (Huang et al study){" "}
                  <sup>
                    [<a href="#ref-3">3</a>]
                  </sup>
                </div>
                <div align="right"></div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="scrollable bordered">
              <td width="287">
                <div align="left">
                  <strong>Fever</strong>
                </div>
              </td>
              <td width="82">
                <div align="right">98%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Cough</strong>
                </div>
              </td>
              <td>
                <div align="right">76%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Myalgia </strong>(muscle pain){" "}
                  <strong>
                    <br />
                    or Fatigue
                  </strong>
                </div>
              </td>
              <td>
                <div align="right">44%</div>
              </td>
            </tr>
            <tr className="scrollable bordered" bgcolor="#FCF8F8">
              <td height="37" colspan="2">
                <div align="left">LESS COMMON SYMPTOMS: </div>{" "}
                <div align="right"></div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Sputum production </strong>
                  <br />
                  (coughing up material
                  <span className="ILfuVd">
                    <span className="e24Kjd">)</span>
                  </span>
                </div>
              </td>
              <td>
                <div align="right">28%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Headache</strong>
                </div>
              </td>
              <td>
                <div align="right">8%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>
                    Haemoptysis
                    <br />
                  </strong>
                  (coughing up blood){" "}
                </div>
              </td>
              <td>
                <div align="right">5%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td>
                <div align="left">
                  <strong>Diarrhea</strong>
                </div>
              </td>
              <td>
                <div align="right">3%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3>
        Findings from the Chen et al study published on The Lancet and based on
        99 hospitalized patients{" "}
        <sup>
          [<a href="#ref-4">4</a>]
        </sup>
      </h3>
      <div className="table-responsive">
        <table className="table table-hover table-bordered table-condensed table-list">
          <thead>
            <tr bgcolor="#FCF8F8">
              <td height="35" colspan="3">
                <div align="left">
                  <strong>Signs and symptoms at admission</strong>
                  <br />
                  (Chen et al study){" "}
                  <sup>
                    [<a href="#ref-4">4</a>]
                  </sup>
                </div>{" "}
                <div align="right"></div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Fever</strong>
                </div>
              </td>
              <td width="52">
                <div align="right">83%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Cough</strong>
                </div>
              </td>
              <td>
                <div align="right">82%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Shortness of breath</strong>
                </div>
              </td>
              <td>
                <div align="right">31%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Muscle ache</strong>
                </div>
              </td>
              <td>
                <div align="right">11%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Confusion</strong>
                </div>
              </td>
              <td>
                <div align="right">9%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Headache</strong>
                </div>
              </td>
              <td>
                <div align="right">8%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Sore throat</strong>
                </div>
              </td>
              <td>
                <div align="right">5%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Rhinorrhoea (runny nose) </strong>
                </div>
              </td>
              <td>
                <div align="right">4%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Chest pain</strong>
                </div>
              </td>
              <td>
                <div align="right">2%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Diarrhea</strong>
                </div>
              </td>
              <td>
                <div align="right">2%</div>
              </td>
            </tr>
            <tr className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>Nausea and vomiting</strong>
                </div>
              </td>
              <td>
                <div align="right">1%</div>
              </td>
            </tr>
            <tr bgcolor="#F0F0F0" className="scrollable bordered">
              <td colspan="2">
                <div align="left">
                  <strong>
                    More than one sign <br />
                    or symptom
                  </strong>
                </div>
              </td>
              <td>
                <div align="right">
                  <strong>90%</strong>
                </div>
              </td>
            </tr>
            <tr bgcolor="#F2F2F2">
              <td width="76">
                <div align="left"></div>
              </td>
              <td width="130" bgcolor="#F8F8F8" className="scrollable bordered">
                <div align="left">
                  <strong>
                    Fever, cough, <br />
                    and shortness <br />
                    of breath
                  </strong>
                </div>
              </td>
              <td bgcolor="#F8F8F8" className="scrollable bordered">
                <div align="right">15%</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h3 id="info">
        Information on Coronavirus Symptoms from Government Health Officials{" "}
      </h3>
      <h4>Canada Public Health Agency</h4>
      <p>
        The Canadian PHAC{" "}
        <a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/symptoms.html#s">
          section dedicated to the 2019 novel coronavirus
        </a>{" "}
        states that:
      </p>
      <ul>
        <li> You may have little to no symptoms.</li>
        <li>
          You may not know you have symptoms of COVID-19 because they are{" "}
          <strong>similar to a cold or flu</strong>.
        </li>
        <li>
          Symptoms may take up to 14 days to appear after exposure to the virus.
          This is the longest known infectious period for this virus.
        </li>
      </ul>
      <p>Symptoms have included:</p>
      <ul>
        <li>
          <strong>fever</strong>
        </li>
        <li>
          <strong>cough</strong>
        </li>
        <li>
          <strong>difficulty breathing</strong>
        </li>
        <li>
          <strong>pneumonia in both lungs</strong>
        </li>
      </ul>
      <p>In severe cases, infection can lead to death.</p>
      <h4>UK Government and NHS </h4>
      <p>
        The UK National Health Service{" "}
        <a href="https://www.nhs.uk/conditions/wuhan-novel-coronavirus/">
          (NHS) section dedicated to Coronavirus (2019-nCoV)
        </a>{" "}
        lists the following as the main symptoms of coronavirus:
      </p>
      <ul>
        <li>
          <strong>a cough</strong>
        </li>
        <li>
          <strong>a high temperature</strong>
        </li>
        <li>
          <strong>shortness of breath</strong>
        </li>
      </ul>
      <p>
        <br />
        The{" "}
        <a href="https://www.gov.uk/guidance/wuhan-novel-coronavirus-information-for-the-public">
          GOV.UK novel coronavirus guidance for the public
        </a>{" "}
        page says:
      </p>
      <ul>
        <li>
          Typical symptoms of coronavirus include <strong>fever</strong> and a{" "}
          <strong>cough that may progress to a severe pneumonia</strong>{" "}
          <strong>causing shortness of breath </strong>and breathing
          difficulties.
        </li>
      </ul>
      <p>
        <br />
        The GOV.UK clinical guidance on{" "}
        <a href="https://www.gov.uk/government/publications/wuhan-novel-coronavirus-background-information/wuhan-novel-coronavirus-epidemiology-virology-and-clinical-features">
          Novel coronavirus (2019-nCoV): epidemiology, virology and clinical
          features
        </a>{" "}
        notes that:
      </p>
      <ul>
        <li>
          <strong>Fever</strong>, <strong>cough</strong> or{" "}
          <strong>chest tightness</strong>, and <strong>dyspnoea</strong> are
          the main symptoms reported. While most cases report a mild illness,
          severe are also being reported, some of whom require intensive care.
          <br />
        </li>
      </ul>
      <h4>Australian Government</h4>
      <p>
        The Australian Government Department of Health informs that symptoms can
        range from mild illness to pneumonia, adding that some people will
        recover easily, while others may get very sick very quickly. According
        to their{" "}
        <a href="https://www.health.gov.au/health-topics/novel-coronavirus-2019-ncov#symptoms">
          list of novel coronavirus symptoms
        </a>
        , people may experience:
      </p>
      <ul>
        <li>
          <strong>fever</strong>
        </li>
        <li>
          <strong>
            flu-like symptoms such as coughing, sore throat and fatigue
          </strong>
        </li>
        <li>
          <strong>
            shortness of breath
            <br />
          </strong>
        </li>
      </ul>
      <br></br>
      <h4>United States Centers for Disease Control and Prevention </h4>
      <p>
        The CDC has published the following infographic on its{" "}
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html">
          Symptoms of Novel Coronavirus (2019-nCoV)
        </a>
        :
      </p>
      <p>
        <img
          className="img-responsive"
          src={require("./img/cdc-coronavirus-infographic-symptoms.gif")}
          width="500"
          height="500"
        />
      </p>
      <h4>World Health Organization </h4>
      <p>
        {" "}
        The WHO has issued an{" "}
        <a href="https://www.who.int/docs/default-source/coronaviruse/clinical-management-of-novel-cov.pdf">
          interim guidance on the clinical management of suspected cases
        </a>{" "}
        in which it says that{" "}
      </p>
      <ul>
        <li>
          "nCoV may present with <strong>mild</strong>,{" "}
          <strong>moderate</strong>, or <strong>severe</strong> illness; the
          latter includes severe pneumonia, ARDS, sepsis and septic shock."
        </li>
      </ul>
      <p align="center">
        [<a href="#page-top">back to top ↑</a>]
      </p>
      <h2 align="left">Sources</h2>
      <div align="left">
        <ol>
          <li id="ref-1">
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/about/symptoms.html">
              Symptoms of Novel Coronavirus (2019-nCoV)
            </a>{" "}
            - United States Centers for Disease Control and Prevention (CDC){" "}
          </li>
          <li id="ref-2">
            <a href="https://jamanetwork.com/journals/jama/fullarticle/2761044?guestAccessKey=f61bd430-07d8-4b86-a749-bec05bfffb65">
              Clinical Characteristics of 138 Hospitalized Patients With 2019
              Novel Coronavirus–Infected Pneumonia in Wuhan, China
            </a>{" "}
            - JAMA, Wang et al., February 7, 2020
          </li>
          <li id="ref-3">
            <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30183-5/fulltext">
              Clinical features of patients infected with 2019 novel coronavirus
              in Wuhan, China
            </a>{" "}
            - Huang et al., The Lancet. January 24, 2020
          </li>
          <li id="ref-4">
            <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)30211-7/fulltext">
              Epidemiological and clinical characteristics of 99 cases of 2019
              novel coronavirus pneumonia in Wuhan, China: a descriptive study
            </a>{" "}
            - Chen et al, The Lancet, January 30, 2020
          </li>
          <li id="ref-5">
            <a href="https://www.who.int/docs/default-source/coronaviruse/who-china-joint-mission-on-covid-19-final-report.pdf">
              Report of the WHO-China Joint Mission on Coronavirus Disease 2019
              (COVID-19)
            </a>{" "}
            [Pdf] - World Health Organization, Feb. 28, 2020
            <br />
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Symptoms;
