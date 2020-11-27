import './App.css';

function App() {
    const today = new window.Date();
    let showModal = false;
    let days = [];

    for (let i = 1; i <= 30; i++) {
        days.push({
            month: 11,
            day: i,
            reminders: [],
        })
    }

    const addReminder = (title, date, city, color) => {

        const reminder = {
            title: title,
            date: date.toLocaleDateString('pt-BR'),
            time: date.getTime(),
            city: city,
            color: color,
        }

        const selectedDay = days.filter((d) => d.day === date.getDate() && d.month === date.getMonth() + 1)[0];
        days[days.indexOf(selectedDay)].reminders.push(reminder);

        console.log(days);
    }

    const openModal = (e) => {
        e.preventDefault();
        showModal = !showModal;
        console.log(showModal, 'showmodal');
        const element = document.getElementById('modal');

        setTimeout(() => {
            if (showModal) {
                element.classList.add('modal-show')
            }
            else {
                element.classList.remove('modal-show')
            }
        }, 300);
    }

    return (
        <div className="App">
            <div className="wrapper">
                <div className="calendar">
                    <div className="month">
                        <div style={styles.monthSize}>
                            <h2 style={styles.h2New}>November</h2>
                            <p id="actual-date">{today.toDateString()}</p>
                        </div>
                        <button
                            className="custom-button"
                            onClick={event => openModal(event)}>New reminder</button>
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
                    <div className="month-days">
                        {days.map((d, index) =>
                            <div key={index} className={today.getDate() === d.day ? 'today day' : 'day'}>
                                <div className="day-number">
                                    {d.day}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div id="modal">
                <div >
                    <div className="container">
                        <a href="#" onClick={event => openModal(event)}>x</a>
                        <button className="custom-button" onClick={event => addReminder('titulo 1', new Date(2020, 10, 7), 'gama', 'green')}>Add Reminder</button>
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
    },
    monthSize: {
        width: "80%",
        paddingLeft: "120px",
    },
};

export default App;
