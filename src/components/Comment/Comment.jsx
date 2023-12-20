import React from 'react';

import classes from './Comment.module.css';
import fullstar from '../../assets/icons/full-star.svg';
import commentImg from '../../assets/images/commentImage.png';

const Comment = () => {
	return (
		<div className={classes.Comment}>
			<div>
				<div className={classes.commenHead}>
					<div className={classes.userName}>Nicola</div>
					<div className={classes.starsCont}>
						<div className={classes.stars}>
							<img src={fullstar} alt='' />
							<img src={fullstar} alt='' />
							<img src={fullstar} alt='' />
							<img src={fullstar} alt='' />
							<img src={fullstar} alt='' />
						</div>
						<p>4.8</p>
					</div>
				</div>
				<div className={classes.commentBody}>
					<img className={classes.commentImg} src={commentImg} alt='' />
					<div className={classes.commentTextCont}>
						<div className={classes.commentText}>
							I am often a weekend traveler and when I go, I do not have anyone
							who is able to feed my cat in the morning and evening. This has
							been a life saver, because it feeds my cat mornings and evenings
							when I am gone. I am able to control the portion sizes, how many
							times it gives food, what time, and I can record my voice which
							will go off when it is giving food. If you have a cat
						</div>
						<button>Read more</button>
					</div>
				</div>
			</div>
			<div className={classes.commentFoot}>
				<p>Today</p>
				<p>17:48</p>
			</div>
		</div>
	);
};

export default Comment;
