// import jwt from 'jsonwebtoken'
// import Members from '../models/members'
// import {Request, Response, NextFunction} from 'express'
// module.exports = (req:Request, res:Response, next:NextFunction) => {
//     const { authorization } = req.headers;
//     const [authType, authToken] = (authorization || "").split(" ");

//     if(!authToken || authType !== "Bearer") {
//         res.status(401).send({
//             errorMessage: "로그인이 필요한 기능입니다.",
//         });
//         return;
//     }

//     try {
//         const { userId } = jwt.verify(authToken, process.env.COOKIE_NAME);
//         Members.findOne({where: {userId}}).then((user) => {
//             res.locals.user = user;
//             next();
//         });
//     } catch (err) {
//         res.status(400).json({errorMessage: "로그인이 필요합니다." });
//     }
// }