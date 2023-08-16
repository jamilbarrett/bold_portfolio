function Resume() {
    return (
        <div className="text-white className=border border-white rounded-lg text-center">
            
            <br /><br />
            <section id="experience">
                <h3 className="text-5xl text-white mb-5">Work Experience</h3>
                <br />

                <div>
                    <h4 className="text-2xl">Keller Williams</h4>
                    <ul>
                        <li>Achieved $18.9 million in gross sales earning, ‘Rookie of the Year’ and ‘Agent of the Month’</li>
                        <li>Prepared representation contracts, exclusive right to sell agreements, and residential/commercial leases</li>
                        <li>Processed lease applications, including qualifying prospects and credit verifications</li>
                        <li>Assisted buyers & sellers with property transactions from conceptualization to implementation</li>
                    </ul>
                </div>
                <br /><br />
                <div>
                    <h4 className="text-2xl">Tech Briefs Media Group</h4>
                    <ul>
                        <li>Aggregated and translated analytic data on subscriber information for business partners</li>
                        <li>Deployed e-newsletters, digital magazines, and email campaigns, with delivery and CTR metric reports</li>
                        <li>Led meetings on database best practices, workload management, and team performance</li>
                        <li>Analyzed consumer data to create behavioral profiles</li>
                        <li>Managed and optimized list segments across databases, including de-duping and supervision of team</li>
                    </ul>
                </div>
            </section>
            <br /><br />
            <section>
                <h3 className="text-2xl text-white">Education</h3>

                <div className="education-item">
                    <p>Rutgers University: Full Stack Software Development</p>
                    <p className="text-white">Aug 2023</p>
                </div>

                <div className="education-item">
                    <p>Hofstra University: Bachelor's in Business Administration</p>
                    <p className="text-white">Dec 2012</p>
                </div>
            </section>
        </div>
    );
}

export default Resume;
