FRONTEND
--------------------------
```
$ npx create-react-app client[Frontend Folder]
$ npm install @mui/material @emotion/react @emotion/styled
$ npm install @material-ui/core [For styling my app]

[For Routing in http://localhost:3000/ which'll show the components of DetailView]
$ npm install react-router-dom
```
```
[In react-router-dom v6, "Switch" is replaced by routes "Routes".

import { Switch, Route } from "react-router-dom";

to


import { Routes ,Route } from 'react-router-dom';
```

```
You also need to update the Route declaration from


<Route path="/" component={Home} />

to

<Route path='/welcome' element={<Home/>} />
```

```
$ npm install @material-ui/icons[For installing icons]
```

In react-router-dom v6 useHistory() is replaced by useNavigate(). Thus

```
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/home');

```
