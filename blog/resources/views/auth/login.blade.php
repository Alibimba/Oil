@extends('layouts.app')

@push('style')
    <link rel="stylesheet" href="{{ asset('css/logigi.css') }}">
@endpush

@section('content')

        <form action="{{route('login.submit')}}" class="auth-form" method="post">
            @csrf
            <div class="container">
                <h1>Войдите в акканут </h1>

                <label for="email"><b>Email|Login</b></label>
                <input type="text" placeholder="Email" name="email" required>
                @error('email') {{ $message }} <br>@enderror
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Password" name="password" required>


                @error('password_confirmation') {{ $message }}<br> @enderror
                <hr>

                <p>Со входом в аккаунт вы подтверждаете: <a href="#">пользовательское соглашение</a>.</p>
                <button type="submit" class="registerbtn">Login</button>
            </div>

            <div class="container signin">
                <p>Ещё нет аккаунта?<a href="{{route('register')}}" class="@if(request()->get('register')) active-a @endif">Сойздайте</a>.</p>
            </div>
        </form>
@endsection
