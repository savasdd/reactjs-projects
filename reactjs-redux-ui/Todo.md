SERVER:
npm init -y
npm install body-parser cors express mongoose nodemon

CL�ENT:
npx create-react-app ./
npm install axios moment react-file-base64 redux redux-thunk
npm install react-redux



MONGODB ATLASS:S
gmail �zerinden mongodb atlas hesab�na giri� yap�l�r
yeni bir organizasyon eklenir: savasmongo
yeni bir proje eklenir: MemoriProject
yeni bir cluster eklenir
database acces-> new user-> name ve password ile kullan�c� eklenir.
network aqccres -> new ip -> ile current ip eklenir.
clusters -> connect-> connect your application -> ba�lant� url al�n�r projede kullan�l�r.

const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/posts', router);


const CONN_URL = 'mongodb+srv://memori:memori123@cluster0.zmokr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONN_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Connected on: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);