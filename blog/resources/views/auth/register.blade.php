@extends('layouts.app')

@push('style')
    <link rel="stylesheet" href="{{ asset('css/logigi.css') }}">
@endpush

@section('content')
    <form action="{{ route('register.create') }}" method="post">
        @csrf
        <div class="container">
            <h1>Регистрация аккаунта</h1>
            <p>Заполните форму, чтобы создать аккаунт</p>


            <label for="email"><b>Email|Login</b></label>
            <input type="text" placeholder="Email" name="email" required>
            @error('email') {{ $message }} <br>@enderror
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Password" name="password" required>

            @error('password') {{ $message }} <br>@enderror
            <label for="psw-repeat"><b>Повторите пароль</b></label>
            <input type="password" placeholder="Password again" name="password_confirmation" required>

            @error('password_confirmation') {{ $message }}<br> @enderror
            <hr>

            <p>Со входом в аккаунт вы подтверждаете: <a href="#">пользовательское соглашение</a>.</p>
            <button type="submit" class="registerbtn">Регистрация</button>
        </div>

        <div class="container signin">
            <p>Уже есть аккаунт?<a href="{{route('login')}}" class="@if( request()->get('login')) active-a @endif">Войти</a>.</p>
        </div>
    </form>
@endsection
