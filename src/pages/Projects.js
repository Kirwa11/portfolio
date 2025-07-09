function projects(){
    const projects = [
        {
            id: 1,
            title: "Hardware management system",
            stack: "ReactJs, Django, WebSockets",
            image: "/images/hardware.jpeg",
            description: "Real-time management for good and materials used",
        },
        {
            id: 1,
            title: "Farm management system",
            stack: "ReactJs, Django, WebSockets",
            image: "/images/farm.jpeg",
            description: "Having the counter the farm work",
        },
        {
            id: 1,
            title: "Car Deals system",
            stack: "ReactJs, Django, WebSockets",
            image: "/images/car.jpeg",
            description: "Fast management and esy track of cars ",
        },
        {
            id: 1,
            title: "Hospital management system",
            stack: "ReactJs, Django, WebSockets",
            image: "/images/hospital.jpeg",
            description: "Real-time management of paper work for fast and reliable",
        },
    ];
    return (
        <div className="projects">
            <h2>MY CURRENTLY PROJECTS</h2>
            <div className="card1">
                {projects.map((project) => (
                    <div key={project.id} style={{maginBottom:"2rem"}} className="project-card">
                        <img src={project.image} alt={project.title} width="100%" style={{maxWidth:"400px"}} />
                        <h3>{project.title}</h3>
                        <p><strong>Stack:</strong>{project.stack}</p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}
export default projects;
