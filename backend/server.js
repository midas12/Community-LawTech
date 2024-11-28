import express from 'express';
import bodyParser from 'body-parser';
import missionRoutes from './routes/missionRoutes.js';
import supportOurMissionRoutes from "./routes/supportOurMissionRoutes.js";
//import ourLegalSupportRoutes from './routes/ourLegalSupportRoutes.js';
import lawyerRegistrationRoutes from "./routes/lawyerRegistrationRoutes.js";

const app = express();
const PORT = 5000;

app.use("/api/lawyer-registration", lawyerRegistrationRoutes);

app.use(bodyParser.json());
app.use('/api/missions', missionRoutes);
app.use("/api/support-our-mission", supportOurMissionRoutes);
//app.use('/api/ourLegalSupport', ourLegalSupportRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
