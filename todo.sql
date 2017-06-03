/*
Navicat MySQL Data Transfer

Source Server         : Local_3306
Source Server Version : 50027
Source Host           : localhost:3306
Source Database       : todo

Target Server Type    : MYSQL
Target Server Version : 50027
File Encoding         : 65001

Date: 2017-06-03 17:23:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dolist
-- ----------------------------
DROP TABLE IF EXISTS `dolist`;
CREATE TABLE `dolist` (
  `id` int(11) NOT NULL auto_increment,
  `content` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

-- ----------------------------
-- Records of dolist
-- ----------------------------
INSERT INTO `dolist` VALUES ('1', 'c1', '2');
INSERT INTO `dolist` VALUES ('2', 'c2', '2');
INSERT INTO `dolist` VALUES ('3', 'c3', '2');
INSERT INTO `dolist` VALUES ('4', 'c4', '2');
INSERT INTO `dolist` VALUES ('5', 'c5', '2');
INSERT INTO `dolist` VALUES ('6', 'c6', '2');
INSERT INTO `dolist` VALUES ('7', 'new todo list', '2');
INSERT INTO `dolist` VALUES ('8', 'asdfjlas', '2');
INSERT INTO `dolist` VALUES ('9', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('10', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('11', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('12', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('13', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('14', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('15', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('16', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('17', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('18', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('19', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('20', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('21', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('22', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('23', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('24', 'asdasd', '2');
INSERT INTO `dolist` VALUES ('25', '123', '2');
INSERT INTO `dolist` VALUES ('26', '123', '2');
INSERT INTO `dolist` VALUES ('27', '123', '2');
INSERT INTO `dolist` VALUES ('28', '123', '2');
INSERT INTO `dolist` VALUES ('29', '123', '2');
INSERT INTO `dolist` VALUES ('30', 'ppp', '2');
INSERT INTO `dolist` VALUES ('31', 'wo', '2');
INSERT INTO `dolist` VALUES ('32', 'w', '2');
INSERT INTO `dolist` VALUES ('33', 'a', '2');
INSERT INTO `dolist` VALUES ('34', 'w', '2');
INSERT INTO `dolist` VALUES ('35', 'a', '2');
INSERT INTO `dolist` VALUES ('36', '', '2');
INSERT INTO `dolist` VALUES ('37', '', '2');
INSERT INTO `dolist` VALUES ('38', '', '2');
INSERT INTO `dolist` VALUES ('39', 'asd', '2');
INSERT INTO `dolist` VALUES ('40', 'asd', '2');
INSERT INTO `dolist` VALUES ('41', 'asd', '2');
INSERT INTO `dolist` VALUES ('42', 'zcx', '2');
INSERT INTO `dolist` VALUES ('43', 'acv', '2');
INSERT INTO `dolist` VALUES ('44', 'bb', '2');
INSERT INTO `dolist` VALUES ('45', 's', '2');
INSERT INTO `dolist` VALUES ('46', 's', '2');
INSERT INTO `dolist` VALUES ('47', 's', '2');
INSERT INTO `dolist` VALUES ('48', 'asd', '1');
INSERT INTO `dolist` VALUES ('49', 'vv', '2');
INSERT INTO `dolist` VALUES ('50', 'cv', '2');
INSERT INTO `dolist` VALUES ('51', 'cv', '2');
INSERT INTO `dolist` VALUES ('52', 'cv', '2');
INSERT INTO `dolist` VALUES ('53', 'cv', '2');
INSERT INTO `dolist` VALUES ('54', 'cv', '1');
INSERT INTO `dolist` VALUES ('55', 'cv', '2');
INSERT INTO `dolist` VALUES ('56', 'd', '1');
INSERT INTO `dolist` VALUES ('57', 'sdfa', '0');
INSERT INTO `dolist` VALUES ('58', '44444444444444233', '2');
INSERT INTO `dolist` VALUES ('59', '31231231', '2');
INSERT INTO `dolist` VALUES ('60', 'xinjia ', '2');
