const usersRouter = require( "./users/router" );
const sessionRouter = require( "./session/router" );
const validateToken = require( "../middlewares/validateToken" );
const postRouter = require("../app/post/router");
const paymentRouter = require("../app/payment/router");
const transactionRouter = require("../app/Transaction/router");

module.exports = ( app ) => {
    app.use( "/session", sessionRouter );
    app.use( "/users", usersRouter );
    app.use("/validatetoken",validateToken);
    app.use("/post", postRouter);
    app.use("/payment", paymentRouter);
    app.use("/transaction", transactionRouter);
};
