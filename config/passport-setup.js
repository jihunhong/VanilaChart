const passport = require('passport');
const YoutubeV3Strategy = require('passport-youtube-v3').Strategy;

const keys = require('../keys');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    })
})

passport.use(
    new YoutubeV3Strategy({

        callbackURL: '/auth/google/redirect',
        clientID: keys.google.local.clientID,
        clientSecret: keys.google.local.clientSecret,
        scope: ['https://www.googleapis.com/auth/youtube.readonly'],
        authorizationParams: {
            access_type: 'offline'
        }

    }, async (accessToken, refreshToken, params,  profile, done) => {
        console.log(params);
        
        const currentUser = await User.findOne({googleId : profile.id});

        if(currentUser){

            done(null, currentUser);

        }else{

            // 새로운 유저를 db에 저장

            const newUser = await new User({
                                            username : profile.displayName,
                                            googleId : profile.id,
                                            accessToken: accessToken,
                                            refreshToken: refreshToken
                                        }).save();

            done(null, newUser);
            
        }

    })
)