
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //

const setDigitalCode = function(array, value){
    for (let i = array.length - 1; i >= 0; i -= 2) {
        //set digitalCode property to the given value
        array[i].digitalCode = value;
    }
    //return modified array
    return array;
};

// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
    //filter to return movies specific genre
    return array.filter(movie => movie.genreTags.includes(tag));
};

// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
    //filter to return movies with certain spec effects
    return array.filter(movie =>
        movie.specialFeatures.some(feature => feature.type === type)
        );
    
};

// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
   //base case
   if (array.length === 0) {
    return "no matching title found";
}

//get the first movie in the array
const currentMovie = array[0];

//check if titles match
if (currentMovie.title === title) {
    //if it has special features return desired string
    if (currentMovie.specialFeatures.length > 0) {
        return `${currentMovie.title} Special Feature: ${currentMovie.specialFeatures[0].title}`;
    } else {
        return `${currentMovie.title} Special Feature: No special features available`;
    }
}

//recursive case 
return getTopSpecialFeature(array.slice(1), title);
};

// PROBLEM #5 //

const mapTitles = function(array){
    return array.map(movie => `${movie.title} (${movie.year}) - dir. ${movie.director}`);
    //map to movies titles with year and director
};

// PROBLEM #6 //

const mapSpecialFeatures = function(array){
    //use map to special features for each movie
    return array.map(movie =>
        movie.specialFeatures.map(feature => feature.title)
        );
};

// PROBLEM #7 //

const createNonsenseString = function(array, index){
    //use reduce and create nonsese str based on spec index
    return array.reduce((acc, movie) => {
        //if title has spec index
        if (movie.title.length > index){
            //add cahracter at the spc indexx of acc
            return acc + movie.title[index];
        }
        //return acc unchanged if index is out
        return acc;
    }, '');
    
};

// PROBLEM #8 //

const getValues = function(object, props){
    //map to get values from objest based on keys
    return props.map(prop => object[prop]);
};
