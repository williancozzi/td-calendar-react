import './App.css';

function App() {
    const today = new window.Date();
    let days = []
    for (let i = 1; i <= 30; i++) {
        days.push(<div>{i}</div>)
    }

    return (
        <div className="App">
            <div className="wrapper">
                <div className="calendar">
                    <div className="month">
                        <div>
                            <h2 style={styles.h2New}>November</h2>
                            <p id="actual-date">{today.toDateString()}</p>
                        </div>
                    </div>
                    <div className="weekdays">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="days">
                        {days}
                        <div style={styles.otherDays}>1</div>
                        <div style={styles.otherDays}>2</div>
                        <div style={styles.otherDays}>3</div>
                        <div style={styles.otherDays}>4</div>
                        <div style={styles.otherDays}>5</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

const styles = {
    h2New: {
        marginTop: "24px",
    },
    otherDays: {
        color: "#aaaaaae8",
        fontWeight: "300",
    }
};


export default App;
