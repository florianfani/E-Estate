import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAMFBMVEXk5ueutLfp6uu4vsCrsbTT1tixt7rZ3N20ur2nrrHKztDc3+Dg4uPFycu9wsXAxccvRAy9AAADNElEQVR4nO2a23LrIAxFAQsbDMb//7eFXJqcJjageOPMGdZDpzN96BohARYSotPpdDqdTqfT6XQ6nc7/gVJK+GmaXPztdBevF0OWItZKM0/iRCWlw0gkHxCZxZ0lpEcrXyAbpjOEJkOvMtcQBd9aRi0bMhchqdsGyI07NklobWkzZWyij2lo8yaFXxhbJdBUIJPi08bHFdk0W6+xUCfmM76+1JrL4icfDbfR5TZSWrSOqLGBbz+7m/E7nwmqU1pVvxhkNtcGB53NtTaSAtCmqqxuPsC9OTB0Zlj2+GoZiUzmopP8BQeyqa+rBKy2lOEEh2aQTvlZ/o8OqtQdSweWy2W3wFcwNkLzbAilwyks3KWn6wB0ULnzZZXF1BlB+45n7sogHcXTWTA2QgWWDuy2PLNKC/Zt4zk6I8pGCMaFhxbclxbjOmiB36GM1UI2eeqvp7iraWKqDg/SRoihNjjYBpir+9QCVvmFml5cLCt4N67mHKUB3qtUFdncopOrik8ucCfu7lO4N+PbuDeK0hld408UtJ1swyetbP7Q2CRvfn203BMig+oxbfmIdXN/JtkubR5C00DvIkSy/cvsVUgH+1fI0nkP6XHJ5sFEBUrP1fGnCa32mi0h5Sc9L2tYl1k7f/oURhoJeXCyyyU0MTaRNcVHN91u7qQlmpcwkr0Mp9xrKo2pWDJrXLZmkypKeL2M6Z9v7jvxL2PQDXZCpdw8yKILKsUwaWw2uWUnKO+MKKAGjJTSw+5BtRUjxJeW8ku9y91oPXjASAm2zEVIhkPzev5E5hahw3bs/btNsdEhTTklhiNkko/5PIXUzHpwfI/9+GmL8Ta8A42fXIaU2xrG4wt9cG9lPkLs+3Azuvzrt86H14UH2aS+xjfZsN6OgTaMvk/diFe9T2U+O6hNdb1jZWRdK6quH8mjvKeq9IHn1BYVI5e8WYtaCpeLN6ZTT+mTbYOlSpS161oFp7DtzJo3Y1HU6UWeDn8oOCt4j+U8bL5rhz4enskfFdCT/IX8zYc1ScAmt1qeNRvIJfuq7RvtgVey78i8sVI2uXP0yI/OPJQbcZzN0JLsR45qS8am0+l0Op1v5QcqCiZnS/ytbgAAAABJRU5ErkJggg=="
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;