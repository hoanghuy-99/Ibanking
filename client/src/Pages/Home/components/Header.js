import React, {useState} from 'react';
const Header = (props) =>{
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">iBanking</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div class="d-flex">
                            <div>You are logged in as Dương Hữu Nguyên
                                <span>
                                    <a href="#">(Logout)</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header