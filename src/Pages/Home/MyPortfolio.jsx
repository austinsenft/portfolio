import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="MyPortfolio">
            <div className="portfolio--containter-box">
                <div className="portfolio--container">
                    <p className="sub--title">Projects</p>
                    <h2 className="section--heading">My Portfolio</h2>
                </div>
                <div>
                    <button className="btn btn-github">
                        <svg

                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 100 80"
                        >
                            <path
                                background-size="contain"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                                data-name="layer2"
                                fill="currentColor"
                            />

                        </svg>
                        Visit My Github
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
             {data?.portfolio?.map((item, index)=> (
                <div key={index} className="portfolio--section--card">
                    <div className="portfolio--section--img">

                    </div>

                     </div>
             ) 
             )}
            </div>

        </section>
    )
}