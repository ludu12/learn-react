import React from "react";
import "./SpaceX.css";

const graphqlQuery = "{\n  launchesPast(limit: 10) {\n    mission_name\n    launch_date_local\n    launch_site {\n      site_name_long\n    }\n    rocket {\n      rocket_name\n    }\n    links {\n      flickr_images\n    }\n  }\n}\n"

const fetchSpaceX = async () => {
    const response = await fetch('https://api.spacex.land/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphqlQuery })
    });

    return response.json();
}

function SpaceX(props) {
    const [launches, setLaunches] = React.useState([]);

    React.useEffect(() => {
        fetchSpaceX().then(response => {
            const { launchesPast } = response.data;
            setLaunches(launchesPast);
        })
    }, [])

    return (
        <div>
            <h1>SpaceX Past 10 Launches</h1>
            <div>
                <i>Check out the graphql playground <a href="https://api.spacex.land/graphql/">here</a>!</i>
            </div>
            <ul>
                {
                    launches.map((launch, i) => {
                        return (
                            <li key={i} className="Launch">
                                <span>
                                    <b>{launch.mission_name}</b>-<i>{new Date(launch.launch_date_local).toLocaleDateString()}</i>
                                </span>
                                <div>
                                    <img src={launch.links.flickr_images[0]} width={72} height={72} />
                                    <div className="Details">
                                        <div>Site: {launch.launch_site.site_name_long}</div>
                                        <div>Rocket: {launch.rocket.rocket_name}</div>

                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default SpaceX;
