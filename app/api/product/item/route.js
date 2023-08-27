import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(Request,Response)
{
    const {searchParams} = new URL(Request.url);
    const name   = searchParams.get("name");

    return NextResponse.json({name});
}
