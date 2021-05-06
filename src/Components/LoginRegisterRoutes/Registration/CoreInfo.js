//CoreInfo component
function CoreInfo() {
    return (
        <div>
            <div>
                <p>What is your name?</p>
            </div>

            <div>
                <p>First Name:</p>
                <p>Last Name:</p>
            </div>

            <div>
                <input placeholder="First Name"></input>
                <input placeholder="Last Name"></input>
            </div>

            <div>
                <p>When is your birthday?</p>
                <input placeholder="MM/DD/YYYY"></input>
            </div>

            <div>
                <p>What is your gender identity?</p>
                <button>Male</button>
                <button>Female</button>
                <button>Non Binary</button>
            </div>

            <div>
                <p>What is your biological sex?</p>
                <button>Male</button>
                <button>Female</button>
            </div>

            <div>
                <p>How do you identify?</p>
                <button>Straight</button>
                <button>Gay</button>
                <button>Bisexual</button>
                <button>Pansexual</button>
                <button>Asexual</button>
                <button>Androsexual</button>
                <button>Gynesexual</button>
                <button>Demisexual</button>
                <button>Polyamorous</button>
                <button>Skoliosexual</button>
            </div>

            <div>
                <button>Save and Continue</button>
            </div>

        </div>
        
    )
}

export default CoreInfo;