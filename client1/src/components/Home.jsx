import { useNavigate } from "react-router-dom"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useEffect } from "react";
const Home = () => {
    // const [field, setField]=useState()
    // const [subject, setSubject]=useState()
    // const [city, setCity]=useState()

    // const navigate = useNavigate();

    const handleSearch = () => {
        // navigate("jobs");
        window.location.href = 'jobs';
    }
    const getFields = async () => {
        const response = await fetch("http://localhost:5000/field",
            {
                method: 'GET',
            })
        const fields = await response.json();
        return fields;
    }
    const getSubjects = async () => {
        const response = await fetch("http://localhost:5000/subject",
            {
                method: 'GET',
            })
        const subjects = await response.json();
        return subjects;
    }
    const getCities = async () => {
        const response = await fetch("http://localhost:5000/city",
            {
                method: 'GET',
            })
        const cities = await response.json();
        return cities;
    }
    let nameFields = "";
    let nameSubjects = "";
    let nameCities = "";
    const getOptions = async () => {
        const fields = await getFields();
        nameFields = fields.map(field => field.name)
        console.log("once",nameFields);
        const subjects = await getSubjects();
        nameSubjects = subjects.map(subject => subject.name)
        // console.log(nameSubjects);
        const cities = await getCities();
        nameCities = cities.map(city => city.name)
        // console.log(nameCities);
    }
    useEffect(() => { getOptions() }, [])
    // const trying=["A","B","C","D"];
    return (
        <>
            <h1>hellow</h1>

            <Autocomplete
                id="field"
                style={{ width: 300 }}
                options={nameFields}
                // openOnFocus={true}
                // multiple
                // getOptionLabel={option => option}
                
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="תחום"
                        variant="outlined"
                    />
                    )}
            />
            {/* <Autocomplete
                id="subject"
                style={{ width: 300 }}
                options={nameSubjects}
                getOptionLabel={option => option}
                // multiple
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="מקצוע"
                        variant="outlined"
                    />
                    )}
            /> */}
            {/* <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={t}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="תחום"
          variant="outlined"
        />
      )}
    /> */}
            {/* <Autocomplete
    multiple
    open={open}
    onOpen={() => {
        setOpen(true);
    }}
    onClose={() => {
        setOpen(false);
    }}
    options={["A", "B", "C", "D", "E"]}
    disableCloseOnSelect
    defaultValue={cities}  //here
    onChange={(e, v) => setCities(v)}
    getOptionLabel={(option) => option}
    renderOption={(option, { selected }) => {
        if (cities.includes(option)) {
        selected = true;
        }
        return (
        <React.Fragment>
            <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
            />
            {option}
        </React.Fragment>
        );
    }}
    renderInput={(params) => {
        return (
        <TextField
            {...params}
            variant="outlined"
            label="Cities"
            placeholder="Enter cities"
            autoComplete="off"
        /> */}
            {/* <Autocomplete
                id="city"
                style={{ width: 300 }}
                options={nameCities}
                getOptionLabel={option => option}
                // multiple
                
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="עיר"
                        variant="outlined"
                    />
                )}
            /> */}

            {/* <Autocomplete label="תחום" onSelect={e => setField(e.value)} />
            <Autocomplete label="תחום" onSelect={e => setField(e.value)} />  */}

            {/* <button onClick={handleSearch}>חיפוש</button> */}
        </>);

}
export default Home;
