//non component imports

//component imports
import BackButton from './../BackButton';

//EditFilters Component
function EditFilters() {
    return (
        <div className="edit-filters-container">
            <BackButton/>
            <div className="edit-filters-topics-flex-container">

                <div className="edit-filters-topics-header">Topic Filters:</div>

                <div className="edit-filters-topics-buttons-flex-container">
                    <div className="edit-filters-topics-button" id="multiplayer-gaming">MultiPlayer Gaming</div>
                    <div className="edit-filters-topics-button" id="epic-novels">Epic Novels</div>
                    <div className="edit-filters-topics-button" id="topic-anime">Anime</div>
                    <div className="edit-filters-topics-button" id="topic-cosplay">Cosplay</div>
                    <div className="edit-filters-topics-button" id="topic-larping">LARPing</div>
                    <div className="edit-filters-topics-button" id="topic-dnd-role-play">DnD/Role Play</div>
                    <div className="edit-filters-topics-button" id="topic-fantasy">Fantasy</div>
                    <div className="edit-filters-topics-button" id="topic-manga-comics">Manga/Comics</div>
                    <div className="edit-filters-topics-button" id="topic-pc-builds">PC Builds</div>
                    <div className="edit-filters-topics-button" id="topic-select-all">Interested in All</div>
                </div>

                <div className="edit-filters-topics-save-button">
                    <button>Save Topics</button>    
                </div>

            </div>

            <div className="edit-filters-discovery-flex-container">

                <div className="edit-filters-discovery-header">Discovery Filters:</div>

                <div className="edit-filters-discovery-settings-flex-container">
                    <div className="edit-filters-discovery-settings-max-distance-flex-container">
                        <div className="edit-filters-discovery-settings-max-distance-text">
                            <p>Max Distance:</p>
                        </div>
                        <div className="edit-filters-discovery-settings-max-distance-dropdown">
                            <select>
                                <option value="25">25 Miles</option>
                                <option value="50">50 Miles</option>
                                <option value="75">75 Miles</option>
                                <option value="100">100 Miles</option>
                            </select>
                        </div>
                    </div>

                    <div className="edit-filters-discovery-settings-show-me-flex-container">
                        <div className="edit-filters-discovery-settings-show-me-text">
                            <p>Show Me:</p>
                        </div>
                        <div className="edit-filters-discovery-settings-show-me-dropdown">
                            <select>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                            </select>
                        </div>
                    </div>

                    <div className="edit-filters-discovery-settings-age-minimum-flex-container">
                        <div className="edit-filters-discovery-settings-age-minimum-text">
                            <p>Age Minimum:</p>
                        </div>
                        <div className="edit-filters-discovery-settings-age-minimum-dropdown">
                            <select>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>

                    <div className="edit-filters-discovery-settings-age-maximum-flex-container">
                        <div className="edit-filters-discovery-settings-age-maximum-text">
                            <p>Age Maximum:</p>
                        </div>
                        <div className="edit-filters-discovery-settings-age-maximum-dropdown">
                            <select>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                    </div>

                </div>

                <div className="edit-filters-discovery-save-button">
                        <button>Save Filters</button>
                </div>

            </div>

        </div>
    )
}

export default EditFilters;