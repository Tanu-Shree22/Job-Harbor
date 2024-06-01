import express, { json } from 'express'
import bcrypt from 'bcryptjs';
import 'dotenv/config'
import jwt from 'jsonwebtoken';
import { User } from '../model/Register.js'
import { Job } from '../model/Job.js'
import fetchuser from '../middleware/fetchuser.js'
import cookieParser from 'cookie-parser';

