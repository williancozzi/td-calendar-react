import './App.css';

function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <div>
                    <h1>React Calendar - TD</h1>
                </div>
                <div className="calendar">
                    <div className="month">
                        <div>
                            <h2 style={styles.h2New}>November</h2>
                            <p>Tue, Nov 24 2020</p>
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
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div>11</div>
                        <div>12</div>
                        <div>13</div>
                        <div>14</div>
                        <div>15</div>
                        <div>16</div>
                        <div>17</div>
                        <div>18</div>
                        <div>19</div>
                        <div>20</div>
                        <div>21</div>
                        <div>22</div>
                        <div>23</div>
                        <div>24</div>
                        <div>25</div>
                        <div>26</div>
                        <div>27</div>
                        <div>28</div>
                        <div>29</div>
                        <div>30</div>
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
        color: "#7f8c8d",
    }
};


export default App;
