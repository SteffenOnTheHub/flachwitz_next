import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {   
  const url = request.nextUrl.clone()
  
  const numberOfJokes = 429;
  const randomJokeId = Math.floor(Math.random() * numberOfJokes);

  if (url.pathname === '/') {
    url.pathname = '/jokes/'+ randomJokeId.toString();
    return NextResponse.redirect(url)   
  } 
}